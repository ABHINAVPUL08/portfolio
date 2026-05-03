import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("@react-three") ||
            id.includes("/three/") ||
            id.includes("three-stdlib")
          ) {
            return "three-r3f";
          }
          if (id.includes("gsap")) {
            return "gsap";
          }
        },
      },
    },
    /* @react-three + three is large; split into `three-r3f` + `gsap` chunks */
    chunkSizeWarningLimit: 3500,
  },
});
