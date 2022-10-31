<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse?'180px':'64px'">
        
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
          
        </el-header>
        <el-main>
          <common-tab></common-tab>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import commonHeader from '../components/commonHeader.vue'
import commonAside from '../components/commonAside.vue';
import commonTab from '../components/commonTab.vue';
import { defineComponent } from 'vue';
import { useStore } from '../store/store'
import { computed } from '@vue/reactivity';
import CommonTab from '../components/commonTab.vue';
export default defineComponent({
  components: {
    commonHeader,
    commonAside,
    commonTab,
    CommonTab
},
  setup() {
    const store = useStore()
    let isCollapse = computed(() => store.isCollapse)
    return {
      isCollapse
    }
}
})


</script>

<style scoped lang="scss">
.common-layout{
  height: 100%;
  > .el-container{
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #545c64;
      overflow-x: hidden;
    }
    .el-header {
      padding: 0px;
    }
    .el-main {
      padding: 0px 20px 0 30px;
      overflow-x: hidden;
    }
  }

}
</style>