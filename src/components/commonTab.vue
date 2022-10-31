<template>
    <div class="tags">
     <el-tag v-for="(tag, index) in store.tabsList" :key="tag.path" 
        :closable="tag.name!='home'" :disable-transitions="false"
        :effect="$route.name ===  tag.name ? 'dark' :'plain'" @click="changeMenu(tag)" @close="handleClose(tag,index)" >
           {{tag.label}} 
        </el-tag>
    </div>
</template>

<script>
import { useRouter,useRoute } from 'vue-router'
import { useStore } from '../store/store';
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const changeMenu = (item)=>{
            router.push({name:item.name})
            store.selectMenu(item)
        }
        const handleClose = (item,index) => {
            let length = store.tabsList.length-1
            store.closeTab(item)
            if(item.name !== route.name) return;
            if(index === length) {
                router.push({
                    name: store.tabsList[index-1].name,
                })
            } else {
                router.push({
                    name: store.tabsList[index].name
                })
            }
        }
        return {
            changeMenu,
            handleClose,
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.tags{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>