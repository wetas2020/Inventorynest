import login from "./components/auth/login.vue";
import register from "./components/auth/register.vue";

const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
];

export default routes;
