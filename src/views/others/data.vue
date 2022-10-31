<template>
    <div style="height: 400px">
                <el-table-v2 :columns="columns" :data="data" :width="700" :height="400" fixed />
    </div>
</template>
<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref} from 'vue';

export default defineComponent({
    setup() {
        const columns = reactive([
            {
                key:'order',
                dataKey:'order',
                title:'员工号',
                width:70,
            },
            {
                key:'name',
                dataKey:'name',
                title:'姓名',
                width:70,
            },
            {
                key:'age',
                dataKey:'age',
                title:'年龄',
                width: 70,
            },
            {
                key:'sex',
                dataKey:'sex',
                title:'性别',
                width:50,
            },
            {
                key:'date',
                dataKey:'date',
                title:'入职日期',
                width:100,
            },
        ])
        const data = ref([])
        const { proxy } = getCurrentInstance()
        const getAllUser = async () => {
            const res = await proxy.$api.getAllUser()
            data.value = res.userData.map((item) => {
                item.sex = +item.sex ? '女' : '男';
                item.id = `${item.order}`
                item.parentId = null
                return item
            })
            console.log(data.value);
            
        }
        onMounted(()=>{
            getAllUser()
        })
        return {
            columns,
            data,
        }
    }
})
</script>  