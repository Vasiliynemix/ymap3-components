import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "YMap3Components", // имя глобальной переменной для UMD
      fileName: "index",
      formats: ["es", "umd"],   // явно указываем форматы
    },
    rollupOptions: {
      external: ["react", "react-dom"], // не включаем в сборку
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});