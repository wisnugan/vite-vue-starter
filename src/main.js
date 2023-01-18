import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

import "./style/main.css";

const store = createPinia();
store.use(piniaPersist);

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
