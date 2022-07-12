import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Task from '../views/Task.vue'
import Projetos from '../views/Projetos.vue'
import Form from '../views/Projetos/Form.vue'
import List from '../views/Projetos/List.vue'
const routes : RouteRecordRaw[] = [{
        path: '/',
        name: 'Task',
        component: Task
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: List
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Form
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Form,
                props: true
            }
        ]
    }
]
const routMain = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default routMain;