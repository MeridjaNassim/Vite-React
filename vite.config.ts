import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    "process.env": {},
  },
  css: {
    preprocessorOptions: {
      less : {
        modifyVars : {
          "@base-color" : "#212121"
        },
        javascriptEnabled: true,
      }
    }
  }
});
