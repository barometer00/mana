import { createRouter, createWebHashHistory } from "vue-router";
import { useStore } from "../store/store";
import { Pinia } from "../store/store"; 
const store = useStore(Pinia)
const routes = [
    {
        path: '/',
        component: () => import('../views/main.vue'),
        name: 'root',
        //redirect:'/home',
        children: [
        ]
    },
    {
        path: '/login',
        name:'login',
        component: () => import('../views/login.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,    
})

router.beforeEach((to, from, next)=>{
    let token = store.token    
    if(!token && to.name !== 'login') {
        next({ name:'login' })
    } else if(!checkRouter(to.path)){
        next({ name:'home'})
    } else {
        next()
    }
})

function checkRouter(path) {
    return router.getRoutes().filter((route =>route.path == path)).length
}

export default router

