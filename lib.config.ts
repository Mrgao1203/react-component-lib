import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/kol-ui/index.ts"),
      name: "kol-ui",
      fileName: "kol-ui",
    },
    outDir: "lib/dist",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
      plugins: [
        typescript({
          target: "es2015", // 这里指定编译到的版本，
          rootDir: resolve(__dirname, "packages/kol-ui"), // 这里指定编译的根目录
          declaration: true, // 这里指定生成声明文件
          declarationDir: resolve(__dirname, "lib/dist"), // 这里指定生成的声明文件目录
          // exclude: resolve(__dirname, "node_modules/**"), // 这里指定不编译的目录
          // allowSyntheticDefaultImports: true, // 这里指定允许默认导入
        }),
      ],
    },
  },
});
