import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createMemoryHistory, createRouter } from "vue-router";

import Login from "./components/Login.vue";
import Sidebar from "./components/Sidebar.vue";

const pinia = createPinia();
const routes = [
  { path: "/", component: Sidebar },
  { path: "/login", component: Login },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
createApp(App).use(pinia).use(router).mount("#app");
