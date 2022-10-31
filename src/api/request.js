 import axios from "axios";
 import config from "../config";
 import { ElMessage } from 'element-plus'
 const NETWORK_ERROR = '网络请求异常，请稍后重试'
 //创建axios实例对象
 const service = axios.create({
    baseURL: config.baseApi
 })

 //请求前的设置
 service.interceptors.request.use((req) => {
    //可以使用自定义heander
    return req //必须返回，否则会造成阻塞
 })

 //请求后，接收时的预处理
 service.interceptors.response.use((res) =>{
    const { code, data, msg } = res.data
    if (code == 200) {
        return data
    } else {
        //对后端设置不同回应处理
        //例如 网络错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
 })

 //核心函数
 export function request(options) {
    // options为对象如下
    // {
    //     methods: 'get'，
    //     data: {}，
    //     mock: true/false，
    // }
    options.method = options.method || 'get'  //默认请求方式get
    if(options.method.toLowerCase() == 'get' ) {
        options.params = options.data
    }
    
    //mock处理 如果options的mock不存在，使用默认；存在则使用设置的值
    let isMock = config.mock
    if(typeof options.mock !== 'undefined') {
        isMock = options.mock
    }

    //对线上环境处理 直接用对应接口 避免使用mock
    if(config.env == 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi 
    }

    return service(options)
 }

