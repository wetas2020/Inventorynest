import login from "./components/auth/login.vue";
import register from "./components/auth/register.vue";
import forget from "./components/auth/forget";

const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
];

export default routes;
