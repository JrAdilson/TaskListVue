import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Task from '../views/Task.vue'
const routes : RouteRecordRaw[] = [{
    path: '/',
    name: 'Task',
    component: Task
}]
const routMain = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default routMain;