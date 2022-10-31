import Mock from 'mockjs'
import menu from './mockdata/menu'
import { addUser, deleteUser, editUser, getAll, getUser } from './mockdata/user'

const getQuery = (url,name)=>{
  const index = url.indexOf('?')
  if(index !== -1) {
    const queryStrArr = url.substr(index+1).split('&')
    for(var i=0;i<queryStrArr.length;i++) {
      const itemArr = queryStrArr[i].split('=')
      if(itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}

Mock.mock(/getMenu/, 'post', (options) => {
    let body = JSON.parse(options.body)
    if ((body.username == 'admin' && body.password == 'admin')||(body.username == 'user' && body.password == 'user'))

    return {
        code: 200,
        data: {
          menu: menu[body.username],
          token:'@guid',
        },
        des: '成功'
      }
})

Mock.mock(/getTableData/,'get',{
    code: "200",
    data: {
      "dataList|6": [{
        "date": "@date",
        "time|2-10": 2,
        "address": "@city",
      }, ],
    },
    desc: "成功",
  }
)

Mock.mock(/getCountData/,'get',{
  code: "200",
  data: {
    "data|9": [{
        name: "订单@natural(100000, 999999)",
        value: "@natural(30, 600)",
        'icon|1': ["user","star","location","setting"],
        color: "@color",
      },]
    }
  } 
)

Mock.mock(/getChartData/,'get',{
  code: 200,
  data: {
    "orderData": {
      "date": ["202201", "202202", "202203", "202204", "202205", "202206", "202207"],
      "data|7": [{
        "苹果": "@integer(1000, 5000)",
        "小米": "@integer(1000, 5000)",
        "华为": "@integer(1000, 5000)",
        "vivo": "@integer(1000, 5000)",
        "oppo": "@integer(1000, 5000)",
        "一加": "@integer(1000, 5000)"
      }]
    },
    "videoData": [{
        name: "苹果",
        value: "2999",
      },
      {
        name: "小米",
        value: "3999",
      },
      {
        name: "华为", 
        value: "2999",
      },
      {
        name: "vivo",
        value: "4999",
      },
      {
        name: "oppo",
        value: "3999",
      },
      {
        name: "一加",
        value: "9999",
      },
    ],
    "userData": [{
        date: "周一",
        new: 5,
        active: 200,
      },
      {
        date: "周二",
        new2: 6,
        active: 290,
      },
      {
        date: "周三",
        new2: 6,
        active: 250,
      },
      {
        date: "周四",
        new2: 6,
        active: 520,
      },
      {
        date: "周五",
        new2: 9,
        active: 450,
      },
      {
        date: "周六",
        new2: 4,
        active: 250,
      },
      {
        date: "周七",
        new2: 6,
        active: 320,
      },
    ],
  }
})

Mock.mock(/getAll/,'get',()=>{
    return getAll()
})

Mock.mock(/getUser/,'post',(options)=>{
  let {page,name} = JSON.parse(options.body)
  return getUser({page,name})
}
)
Mock.mock(/addUser/,'post',(options)=>{
  return addUser(JSON.parse(options.body))
})

Mock.mock(/editUser/,'post',(options)=>{
  return editUser(JSON.parse(options.body))
})

Mock.mock(/deleteUser/,'get',(options)=>{
  return deleteUser(getQuery(options.url,'order'))
})

Mock.mock(/getList/,'get', {
  code: "200",
  data: {
    list: [
      {
        name: '待处理',
        "children|3": [
          {
            "id|+1": 101,
            tags: ['紧急'],
            "name": '事件',
            options: [
              '类型：处理'
            ]
          }, ]
      },
      {
        name: '处理中',
        "children|2": [{
          "id|+1": 12,
          tags: ['新增'],
          name: '处理',
          options: [
            '类型：处理'
          ]
        },]
      },
      {
        name: '已完成',
        children: [{
          id: 11,
          tags: ['新增'],
          name: '完成',
          options: [
            '类型：完成'
          ]
        },]
      },
   ]
},
  desc: "成功",
})