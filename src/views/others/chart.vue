<template>
    <el-row>
        <el-col :offset="4" :span="16">
            <el-card style="height:280px">
                <div ref="echart" style="height: 280px"></div>
            </el-card>
            <div class="graph">
                <el-card style="height:260px">
                    <div ref="userechart" style="height:240px"></div>
                </el-card>
                <el-card style="height:260px">
                    <div ref="videoechart" style="height:240px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script setup>
import { reactive, onMounted, getCurrentInstance} from 'vue'
import * as echarts from 'echarts'

const { proxy } = getCurrentInstance()

//折线 柱状 配置
const xOptions = reactive({
    textStyle: {
        color: "#333",
    },
    grid: {
        left: "10%",
    },
    tooltip: {
        trigger: "axis",
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: {
                color: "#17b3a3"
            },
        },
        axisLabel: {
            interval: 0,
        },
    },
    yAxis: [
        {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#17b3a3"
                },
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de", "#2ec7c9", "#b6a2de", "#2ec7c9", "#b6a2de"],
    series: []
})
//饼状图配置
const pieOptions = reactive({
    tooltip: {
        trigger: "item",
    },
    series: [],
})
let orderData = reactive({
    xData: [],
    series: [],
})
let userData = reactive({
    xData: [],
    series: [],
})
let videoData = reactive({
    series: [],
})
const dataGroup = reactive({})

const getChartData = async () => {
    let result = await proxy.$api.getChartData()
    const res = result.orderData
    const userRes = result.userData
    const videoRes = result.videoData
    
    orderData.xData = res.date
    
    const keyArray = Object.keys(res.data[0])
    const series = []
    
    keyArray.forEach((key) => {
        series.push({
            name: key,
            data: res.data.map(item => item[key]),
            type: 'line',
        })
    })
    orderData.series = series
    xOptions.xAxis.data = orderData.xData
    xOptions.series = orderData.series
    //渲染
    dataGroup.hEcharts = echarts.init(proxy.$refs['echart'])
    dataGroup.hEcharts.setOption(xOptions)
    //柱状图
    userData.xData = userRes.map((item) => item.date)
    userData.series = [
        {
            name: '新增用户',
            data: userRes.map((item) => item.new2),
            type: "bar",
        },
        {
            name: '活跃用户',
            data: userRes.map((item) => item.active),
            type: "bar",
        },
    ]
    xOptions.xAxis.data = userData.xData
    xOptions.series = userData.series
    //渲染
    const uecharts = echarts.init(proxy.$refs['userechart'])
    uecharts.setOption(xOptions)
    //饼状图
    videoData.series = [
        {
            data: videoRes,
            type: "pie",
        }
    ]
    pieOptions.series = videoData.series

    const pecharts = echarts.init(proxy.$refs['videoechart'])
    pecharts.setOption(pieOptions)
}
onMounted(() => {
    getChartData()
})
</script>
<style scoped lang="scss">
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .el-card{
    width:80%;
    .echart{
        height:200px;
        width: 100%;
    }
  }
  </style>