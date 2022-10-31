<template>
    <el-row :gutter="20" class="home">
        <el-col :span="8">
            <el-card shadow="hover" class="user">
                <template #header>
                    <div class="user-info">
                        <img src="../../assets/logo.png" alt="" class="img">
                        <div class="info">
                            <p class="name">Admin</p>
                            <p class="role">超级管理员</p>
                        </div>
                    </div>
                </template>
                <div class="login-info">
                    <p>上次登录时间<span>2022</span></p>
                    <p>上次登录地点<span>上海</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" class="table">
                <el-table :data="tableData" height="160px">
                    <el-table-column v-for="(val,key) in dataList" 
                    :key="key" :prop="key" :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card :body-style="{ display:'flex', padding:0 }" v-for="(item,index) in countData" :key="index">
                    <component class="icons" :is="item.icon" :style="{background:item.color}"></component>
                    <div class="detail">
                        <p class="number">￥{{item.value}}</p>
                        <p class="text">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted ,ref, reactive} from 'vue';
import * as echarts from 'echarts'
export default defineComponent({
    setup() {
        const { proxy } =getCurrentInstance()
        let tableData = ref([])
        let countData = ref([])
           
        const dataList = {
            date:'出差日期',
            time:'出差天数',
            address:'出差地址',
        }
        const getTableData = async ()=> {
              let res = await proxy.$api.getTableData()
              
              tableData.value = res.dataList
        }
        const getCountData = async () => {
            let res = await proxy.$api.getCountData()
            countData.value = res.data
        }
        onMounted(()=>{
            getTableData() 
            getCountData()
        })

 
        return {
            tableData,
            countData,
            dataList,
        }
    },
})
</script>

<style scoped lang="scss">
.home {

    .user {
        margin-left: 0px;
        margin-bottom: 10px;

        .user-info {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .img {
                max-height: 100px;
                max-width: 100px;
                border-radius: 50%;
                border: 1px solid #000;
                margin: 0 40px;
            }

            .info {
                font-size: 14px;
            }
        }
        .login-info {
            margin-left: 20px;
            padding: 0;

            p {
                font-size: 14px;
                line-height: 20px;
                color: #999;
            }

            span {
                color: #666;
                margin-left: 70px;
            }

        }
    }

    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 100px;
        .el-card{
            width: 32%;
            margin-bottom: 20px;
        .icons{
            width: 80px;
            height: 80px;
            font-size: 30px;
            color: #fff;
            line-height: 80px;
            text-align: center;
        }
        .detail{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .number{
                 font-size: 20px;
                 margin-bottom: 10px;
            }
            .text{
                font-size: 14px;
                text-align: center;
                color: #999;
            }
        }
    }
    }
    .graph {
        display: flex;
        justify-content:space-between ;
        margin-top: 20px;
        .el-card{
            width: 48%
        }
    }
}
</style>