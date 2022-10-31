// 项目的api管理


import { request } from './request'
export default {
    //home组件 左侧表格数据获取
    getTableData() {
        return request({
            url:'/home/getTableData',
            method: 'get',
            mock: false,
        }) 
    },
    getCountData() {
        return request({
            url:'/home/getCountData',
            method: 'get',
            mock: false,
        })
    },
    getChartData(){
        return request({
            url:'/home/getChartData',
            method: 'get',
            mock:false,
        })
    },
    getAllUser(){
        return request({
            url:'user/getAll',
            method: 'get',
            mock:true,
        })
    },
    getUserData(params='{}') {
        return request({
            url:'/user/getUser',
            method:'post',
            mock:true,
            data:params,
        })
    },
    addUserData(params) {
        return request({
            url:'/user/addUser',
            method:'post',
            mock:true,
            data:params,
        })
    },
    editUserData(params) {
        return request({
            url:'/user/editUser',
            method:'post',
            mock:true,
            data:params,
        })
    },
    deleteUserData(params) {
        return request({
            url:'/user/deleteUser',
            method:'get',
            mock:true,
            data:params,
        })
    },
    //根据用户名不同 返回不同菜单
    getMenu(params) {
        return request({
            url:'/premission/getMenu',
            method:'post',
            mock:false,
            data: params,
        })
    },
    getWorkList() {
        return request({
            url:'/work/getList',
            method:'get',
            mock: false,
        })
    }
}