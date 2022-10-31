import Mock from "mockjs";
const user = Mock.mock({
    'list|100': 
        [{
            "order|+1": 1001,
            date: "@date",
            name: "@cname",
            age: "@integer(18,60)",
            sex: "@integer(0,1)",
        }]
});
export default user