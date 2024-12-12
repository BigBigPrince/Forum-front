import { createRouter, createWebHistory } from 'vue-router';
import Authentication from "@/pages/user_authentication/Authentication.vue";
import Test from "@/pages/user_authentication/test.vue";

const routes = [
    {
        path: '/Authentication',
        name: 'Authentication',
        component: Authentication
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;