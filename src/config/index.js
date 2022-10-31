// 环境配置文件
//开发环境，测试环境，线上环境

// env 为当前环境
const env =import.meta.env.MODE||'prod'

const EnvConfig = {
    development: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/ced2e052afbe730ef558b2b5d058807b/home',
    },
    test: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/ced2e052afbe730ef558b2b5d058807b',
    },
    prod: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/ced2e052afbe730ef558b2b5d058807b/',
    },
}

export default {
    env,
    //mock接口默认使用
    mock: true,
    ...EnvConfig[env], //计算属性
}