<template>
    <div class="tags">
     <el-tag v-for="(tag, index) in tags" :key="index" 
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
        const tags =  store.tabsList
        const changeMenu = (item)=>{
            router.push({name:item.name})
            store.selectMenu(item)
        }
        const handleClose = (item,index) => {
            let length =tags.length-1
            store.closeTab(item)

            if(item.name !== route.name) return;
            if(index === length) {
                router.push({
                    name:tags[index-1].name,
                })
            } else {
                router.push({
                    name:tags[index].name
                })
            }

        }
        return {
            tags,
            changeMenu,
            handleClose,
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