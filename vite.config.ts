import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "model",
        replacement: path.resolve(__dirname, "src/model"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "globalStyle",
        replacement: path.resolve(__dirname, "src/GlobalStyle"),
      },
    ],
  },
});
