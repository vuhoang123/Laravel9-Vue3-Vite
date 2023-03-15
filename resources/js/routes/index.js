import { createWebHistory, createRouter } from "vue-router";
import BaseLayout from "../layouts/BaseLayout";
const routes = [
    {
        name: "Home",
        path: "/",
        component: BaseLayout,
        meta: { requiresAuth: true },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    // Fix scroll of sidebar when change route
    const sidebarSelector = "#js-sidebar";
    const sidebarElement = document.querySelector(sidebarSelector);
    sessionStorage.setItem("scrollTop", sidebarElement?.scrollTop || 0);
});

export default router;
