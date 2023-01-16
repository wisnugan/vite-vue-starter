import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

import "./style/main.css";

const store = createPinia();
const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
