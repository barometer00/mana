import config from '../../config/index.js'
import user from './userdata.js'

let userlist = user.list
let order = 1100
export const getUser = ({ page = 1, name = ''}) =>{
    let list = userlist.filter((item) => item.name.includes(name))
    let count = list.length
    list = list.filter((item,index) => index>=page*20-20&&index<page*20 )
    return {
        code: "200",
        data: {
            userData:list,
            count:count,
        },
        desc: "成功",
      }
}
export const addUser = (add) =>{
    order += 1
    add.order = order
    userlist.unshift(add)
    return {
        code: "200",
        data: {
        },
        desc: "成功",
      }
}
export const editUser = (edit) =>{
    let n = userlist.findIndex((item) =>item.order == edit.order)
    userlist[n] = edit
    return {
        code: "200",
        data: {
        },
        desc: "成功",
      }
}
export const deleteUser = (order) =>{
    let n = userlist.findIndex((item) =>item.order == order)
    userlist.splice(n,1)
    return {
        code: "200",
        data: {
        },
        desc: "成功",
      }
}
export const getAll =() => {
    return {
        code: "200",
        data: {
            userData:userlist,
        },
        desc: "成功",
      }
}

export default user