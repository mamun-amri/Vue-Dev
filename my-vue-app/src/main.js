import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from "./components/HomePage.vue";
import Login from "./components/LoginView.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
