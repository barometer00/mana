import { defineStore } from 'pinia'
import Cookie from 'js-cookie'
import { createPinia } from 'pinia'

export const Pinia = createPinia()

export const useStore = defineStore('main',{
    state: () => ({
            isCollapse: true,
            currentMenu: JSON.parse(sessionStorage.getItem('currentMenu')) ,
            tabs: JSON.parse(sessionStorage.getItem('tabs')||'[]'),
            menu: JSON.parse(localStorage.getItem('menu') ||'[]'), 
            token:Cookie.get('token') ||'',
    }),
    getters: {
        tabsList(){
            return [
                {
                    path:'/',
                    name:'home',
                    label:'首页',
                    icon:'home',                 
                },
            ].concat(this.tabs)
        }
    },
    actions: {
        updataIsCollapse(){
            this.isCollapse = !this.isCollapse
        },
        selectMenu(val){
            if(val.name === 'home') {
                this.currentMenu = null
                sessionStorage.removeItem('currentMenu')
            }  else {
                this.currentMenu = val
                sessionStorage.setItem('currentMenu', JSON.stringify(val))
                let result = this.tabsList.findIndex(item => item.name == val.name);
                result == -1 ? this.tabs.push(val) :''
                sessionStorage.setItem('tabs', JSON.stringify(this.tabs))
            }      
        },
        cleanCurrentMenu(){
            this.currentMenu = null
            sessionStorage.removeItem('currentMenu')
        },
        closeTab(val){
            let result = this.tabs.findIndex(item =>item.name === val.name)
            this.tabs.splice(result,1)
            sessionStorage.setItem('tabs', JSON.stringify(this.tabs))
        },
        cleanTab(){
            this.tabs=[]
            sessionStorage.removeItem("tabs")
        },
        setMenu(val){
            this.menu = val
            localStorage.setItem('menu', JSON.stringify(val))
        },
        getMenuRouter(router){
            let menuArrey = []
            const modules = import.meta.glob('../views/*/*.vue')
            this.menu.forEach(item => {
                if(item.children) {
                    item.children.forEach(item => {              
                        item.component = modules[`../views/${item.url}.vue`] ;      
                        menuArrey.push(item)
                    })
                } else {
                    item.component = modules[`../views/${item.url}.vue`]
                    menuArrey.push(item)                  
                }
            });
            menuArrey.forEach(item =>{
               router.addRoute('root',item)
              // router.options.routes.push(item)
            })
        },
        cleanMenu(){
            this.menu = []
            localStorage.removeItem('menu')
        },
        setToken(val){
            this.token = val
            Cookie.set('token',val)
        },
        cleanToken() {
            this.token = ''
            Cookie.remove('token')
        },
    }
})