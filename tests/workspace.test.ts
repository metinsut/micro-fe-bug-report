import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const rootDir = process.cwd();

function read(relativePath: string) {
  return readFileSync(join(rootDir, relativePath), "utf8");
}

describe("module federation workspace", () => {
  test("defines a Bun workspace for host and both remote apps", () => {
    expect(existsSync(join(rootDir, "package.json"))).toBe(true);

    const pkg = JSON.parse(read("package.json"));

    expect(pkg.workspaces).toEqual(["apps/*"]);
    expect(pkg.scripts.dev).toContain("concurrently");
    expect(pkg.scripts.dev).toContain("dev:scheduler");
    expect(pkg.scripts.build).toContain("bun --filter");
    expect(pkg.scripts.build).toContain("scheduler");
  });

  test("configures the remote app to expose HelloCard", () => {
    const remoteConfig = read("apps/remote/vite.config.ts");

    expect(remoteConfig).toContain("name: \"remote\"");
    expect(remoteConfig).toContain("filename: \"remoteEntry.js\"");
    expect(remoteConfig).toContain("\"./HelloCard\": \"./src/components/HelloCard.tsx\"");
  });

  test("configures the host app to consume the remote module", () => {
    const hostConfig = read("apps/host/vite.config.ts");
    const hostApp = read("apps/host/src/App.tsx");

    expect(hostConfig).toContain("name: \"host\"");
    expect(hostConfig).toContain("entry: \"http://127.0.0.1:4173/remoteEntry.js\"");
    expect(hostApp).toContain("React.lazy(() => import(\"remote/HelloCard\"))");
  });

  test("configures the scheduler remote and host integration", () => {
    const schedulerConfig = read("apps/scheduler/vite.config.ts");
    const hostConfig = read("apps/host/vite.config.ts");
    const hostApp = read("apps/host/src/App.tsx");

    expect(schedulerConfig).toContain("name: \"scheduler\"");
    expect(schedulerConfig).toContain("port: 4175");
    expect(schedulerConfig).toContain("\"./SchedulePanel\": \"./src/components/SchedulePanel.tsx\"");
    expect(hostConfig).toContain("entry: \"http://127.0.0.1:4175/remoteEntry.js\"");
    expect(hostApp).toContain("React.lazy(() => import(\"scheduler/SchedulePanel\"))");
  });
});
