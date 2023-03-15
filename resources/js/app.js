import "./bootstrap.js";
import "../css/app.css";
import { createApp } from "vue";
import App from "./views/App.vue";
const app = createApp(App);
app.mount("#app");
