<template>
    <div class="container">
        <div class="l-content">
            <el-button size="small" plain @click="handleCollapse">
                <el-icon size="20">
                    <Menu />
                </el-icon>
            </el-button>
                <el-breadcrumb separator="/" class="bread">
                    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="store.currentMenu" :to="store.currentMenu.path">{{store.currentMenu.label}}</el-breadcrumb-item>
                </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="img" :src="getImgSrc('logo')" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from '../store/store'
export default {
    setup() {
        const getImgSrc = (name) => {
            return new URL(`../assets/${name}.png`, import.meta.url).href
        }
        const store = useStore()
        const handleCollapse = () => {
            store.updataIsCollapse()
        }
        const router = useRouter()
        const handleLoginOut = () =>{
            store.cleanMenu()
            store.cleanToken()
            store.cleanCurrentMenu()
            router.push({
                name:'login'
            })
        }
        return {
            getImgSrc,
            handleCollapse,
            handleLoginOut,
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;   
    width:100%;
    height: 50px;
    background-color: #333;
}

.r-content {
    margin-right: 20px;
    .el-dropdown-link {
        .img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: 1px #c00000 solid;
        }
    }
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin: 0 20px;
    }
    h3 {
        color:#fff;
    }
}
.bread:deep(span) {
    color: #fff !important;
    cursor: pointer !important;
}
</style>