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
      name: "remote",
      filename: "remoteEntry.js",
      dts: false,
      exposes: {
        "./HelloCard": "./src/components/HelloCard.tsx",
      },
      shared,
    }),
  ],
  server: {
    host: "127.0.0.1",
    port: 4173,
    origin: "http://127.0.0.1:4173",
  },
  build: {
    target: "chrome89",
  },
});
