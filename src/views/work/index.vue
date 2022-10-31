<template>
    <div class="layout-container-table">
        <div class="list">
            <Block v-for="(block, key) in list" :key="key" :data="block" />
        </div>
    </div>
</template>
  
<script>
  import { defineComponent, getCurrentInstance, ref } from 'vue'
  import Block from '../../components/work/block.vue'
  export default defineComponent({
    components: {
      Block,
    },
    setup() {
      let list = ref([])
      const { proxy } = getCurrentInstance()
      const getList = async() => {
        let res = await proxy.$api.getWorkList()
        list.value = res.list
      }    
      getList()
      return {
        list
      }
    }
  })
  </script>
  
<style lang="scss" scoped>
    .layout-container-table {
      white-space: nowrap;
      padding: 15px 0 0 0;
      position: relative;
     
      .list {
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: auto;
        text-align: left;
        height: 400px;
        padding: 0 15px;
        background: #fff;
        .block{
          margin-right: 20px;
        }
        .block:last-child {
          margin-right: 0;
        }
      }
    } 
  </style>