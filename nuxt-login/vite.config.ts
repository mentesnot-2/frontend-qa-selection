import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server:{
    hmr:{
      host:'http://localhost:3000/'
    }
  }
});
