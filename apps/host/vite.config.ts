import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const shared = {
  react: {
    singleton: true,
  },
  "react/": {
    singleton: true,
  },
  "react-dom": {
    singleton: true,
  },
  "react-dom/": {
    singleton: true,
  },
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      dts: false,
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://127.0.0.1:4173/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      shared,
    }),
  ],
  server: {
    host: "127.0.0.1",
    port: 4174,
    origin: "http://127.0.0.1:4174",
  },
  build: {
    target: "chrome89",
  },
});
