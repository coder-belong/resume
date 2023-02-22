import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./",
  plugins: [vue()],
  css: {
    //css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/index.less";', //全局less变量文件
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 9527,
    open: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    minify: "terser",
    chunkSizeWarningLimit: 1500,
    cssTarget: "chrome61",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
