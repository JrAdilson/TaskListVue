import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Task from '../views/Task.vue'
import Projetos from '../views/Projetos.vue'
const routes : RouteRecordRaw[] = [{
        path: '/',
        name: 'Task',
        component: Task
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    }
]
const routMain = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default routMain;