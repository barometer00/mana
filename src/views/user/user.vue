<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <el-card class="group">
                <template #header>
                    <text>组织管理</text>
                </template>
                <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
            </el-card>
        </el-col>
        <el-col :span="18">
            <div class="user-header">
                <el-button type="primary" @click="handleAdd">+新增</el-button>
                <el-form :inline="true" :model="formInline">
                    <el-form-item label="请输入">
                        <el-input v-model="formInline.keyword" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="table">
                <el-table :data="list" style="width: 100%" border>
                    <el-table-column v-for="(item,index) in tableLabel" :key="index" :label="item.label"
                        :prop="item.prop" :min-width="item.width" />
                    <el-table-column align="right">
                        <template #header>
                            操作
                        </template>
                        <template #default="scope">
                            <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
                            <el-button size="small" type="danger" @click="handleDelete(scope.row.order)">Delete
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination class="pager" small background layout="prev, pager, next" :total="config.total"
                    :page-size="20" @current-change="handleCurrentChange"></el-pagination>
            </div>
        </el-col>
    </el-row>

    <el-dialog v-model="dialogVisible" :title="type == 'add' ? '新值用户' : '编辑用户'" width="35%" :before-close="handleClose">
        <el-form :inline="true" :model="formUser" ref="userForm" :rules="rules">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="formUser.name" placeholder="请输入姓名" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="formUser.age" placeholder="请输入年龄" />
                    </el-form-item>
                </el-col>
            </el-row>


            <el-form-item label="性别" prop="sex">
                <el-select v-model="formUser.sex" placeholder="请选择性别">
                    <el-option label="男" value="0" />
                    <el-option label="女" value="1" />
                </el-select>
            </el-form-item>
            <el-form-item label="日期" prop="date">
                <el-date-picker v-model="formUser.date" type="date" label="选择日期" placeholder="选择日期"
                    style="width: 100%" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handeleCancel">取消</el-button>
                <el-button type="primary" @click="onSubmit">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { def } from '@vue/shared';

export default defineComponent({
    setup() {
        //树形控件
        const handleNodeClick = (data) => {
            config.page = data.$treeNodeId/5+1;
            //console.log(config)
            getUserData(config)
        }
        const data = [
            {
                label: '人事部',
                children: [
                ],
            },
            {
                label: '研发部',
                children: [
                    {
                        label: '前端',
                    },
                    {
                        label: '后端',
                    },
                ],
            },
            {
                label: '运营部',
                children: [
                    {
                        label: '市场运营',
                    },
                    {
                        label: '互联网运营',
                    },
                ],
            },
        ]
        const defaultProps = {
            children: 'children',
            label: 'label',
        }

        //表格
        const { proxy } = getCurrentInstance()
        const list = ref([])
        onMounted(() => {
            getUserData(config)
        })
        const getUserData = async (config) => {
            const res = await proxy.$api.getUserData(config)
            list.value = res.userData.map((item) => {
                item.sex = +item.sex ? '女' : '男';
                return item
            })
            config.total = res.count
            config.name = ''
        }
        const addUserData = async (formUser) => {
            await proxy.$api.addUserData(formUser)
            dialogVisible.value = false
            proxy.$refs.userForm.resetFields()
            config.page = 1
            getUserData(config)
        }
        const editUserData = async (formUser) => {
            await proxy.$api.editUserData(formUser)

            proxy.$refs.userForm.resetFields()
            getUserData(config)
        }
        //表头设置
        const tableLabel = reactive([
            {
                prop: 'order',
                label: '员工号',
                width: '70px',
            },
            {
                prop: 'name',
                label: '姓名',
                width: '70px',
            },
            {
                prop: 'age',
                label: '年龄',
                width: '70px'
            },
            {
                prop: 'sex',
                label: '性别',
                width: '50px',
            },
            {
                prop: 'date',
                label: '入职日期',
                width: '100px',
            },
        ])
        const config = reactive({
            total: 0,
            page: 1,
            name: '',
        })
        const handleCurrentChange = (page) => {
            config.page = page
            getUserData(config)
        }

        //功能
        const formInline = reactive({
            keyword: '',
        })
        const handleSearch = () => {
            config.name = formInline.keyword
            getUserData(config)
        }
        //对话框
        const dialogVisible = ref(false)
        const handleClose = (done) => {
            ElMessageBox.confirm('确定关闭吗？')
                .then(() => {
                    handeleCancel()
                    done()
                })
                .catch(() => {
                    // catch error
                })
        }
        const formUser = reactive({
            name: '',
            age: "",
            sex: '',
            date: '',
        })
        const timeFormat = (timer) => {
            let time = new Date(timer)
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let day = time.getDate()
            function add(m) {
                return m < 10 ? `0${m}` : m
            }
            return `${year}-${add(month)}-${add(day)}`
        }
        const handeleCancel = () => {
            dialogVisible.value = false
            proxy.$refs.userForm.resetFields()
        }
        const onSubmit = () => {
            proxy.$refs.userForm.validate((valid) => {
                if (valid) {
                    if (type.value == 'add') {
                        formUser.date = timeFormat(formUser.date)
                        addUserData(formUser)
                    }
                    else {
                        formUser.date = timeFormat(formUser.date)
                        dialogVisible.value = false
                        // formUser.sex = formUser.sex == '男' ? 0 : 1 ;
                        if (formUser.sex == '男' || formUser.sex == '0') formUser.sex = 0
                        else formUser.sex = 1
                        editUserData(formUser)
                    }
                } else {
                    ElMessage({
                        showClose: true,
                        message: '请输入正确的内容',
                        type: 'error',
                    })
                }
            })
        }

        const rules = reactive({
            name: [
                { required: true, message: '请输入姓名', trigger: "blur" },
            ],
            age: [
                { required: true, message: '请输入年龄', trigger: "blur" },
                { type: 'number', message: '请输入数字', trigger: ["blur", "change"] },
            ],
            sex: [
                { required: true, message: '请输入性别', trigger: "blur" },
            ],
            date: [
                { required: true, message: '请输入入职日期', trigger: "blur" },
            ],
        })
        const type = ref('add')
        const handleAdd = () => {
            dialogVisible.value = true
            type.value = 'add'
        }
        const handleEdit = (row) => {
            dialogVisible.value = true
            type.value = 'edit'
            proxy.$nextTick(() => {
                Object.assign(formUser, row)
            })
        }
        const handleDelete = async (order) => {
            await proxy.$api.deleteUserData({ order })
            getUserData(config)
        }
        return {
            handleNodeClick,
            data,
            defaultProps,
            tableLabel,
            list,
            config,
            handleCurrentChange,
            formInline,
            handleSearch,
            dialogVisible,
            handleClose,
            formUser,
            handeleCancel,
            onSubmit,
            rules,
            type,
            handleAdd,
            handleEdit,
            handleDelete,
        }
    }
})
</script>
<style lang="scss" scoped>
.group{
    margin-top: 45px;
}

.user-header {
    display: flex;
    justify-content: space-between;
}

.table {
    position: relative;

    .pager {
        position: absolute;
        right: 0;
        bottom: -40px;
    }
}
</style>