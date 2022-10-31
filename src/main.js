import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/scss/index.scss'
import { Pinia } from './store/store'
import api from './api/api'
import { useStore } from './store/store'
import'./mock/index.js'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


app.use(ElementPlus)
app.use(Pinia)

const store = useStore()
store.getMenuRouter(router)

app.use(router)
//将接口布置在全局上
app.config.globalProperties.$api = api

app.mount('#app')
