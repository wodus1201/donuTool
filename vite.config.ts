import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/background/*",
          dest: "background",
        },
        {
          src: "src/overlay/*",
          dest: "overlay",
        },
        {
          src: "src/assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
