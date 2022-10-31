<template>
    <el-menu class="el-menu" background-color="#545c64" text-color="#fff" :collapse="!store.isCollapse" :collapse-transition="false" :default-active="route.fullPath" :router="true"> 
        <h3 v-show="store.isCollapse">后台管理</h3>
        <h3  v-show="!store.isCollapse">后台</h3>
        <el-menu-item v-for="(item) in noChildren()" :key="item.path" :index="item.path" @click="handlerRoute(item)">
            <component class="icons" :is="item.icon"></component>
            <span>{{item.label}}</span>
        </el-menu-item>
        <el-sub-menu v-for="(item) in hasChildren()" :key="item.path" :index="item.label">
            <template #title>
                <component class="icons" :is="item.icon"></component>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.path" @click="handlerRoute(item2)">
                <component class="icons" :is="item2.icon"></component>
                <span>{{item2.label}}</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script>
import { useStore } from '../store/store'
import { useRoute, useRouter } from 'vue-router'
export default {
    setup() {
        const store = useStore()
        const List = store.menu
        const router = useRouter()
        const route = useRoute()
        const handlerRoute = (item) => {
            //router.push({name: item.name})
            store.selectMenu(item)
        }
        const noChildren = () => {
            return List.filter(item => !item.children)
        }
        const hasChildren = () => {
            return List.filter(item => item.children)
        }
        
        
        return {
            noChildren,
            hasChildren,
            store,
            handlerRoute,
            route,
        }
    }
}

</script>

<style scoped lang="scss">
.icons {
    height: 18px;
    width: 18px;
}
h3 {
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.el-menu {
    border: 0;
}
</style>