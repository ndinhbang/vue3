<template>
  <a-layout-sider
      class="app-sidebar"
      v-model:collapsed="collapsed"
      :collapsible="collapsible"
      :trigger="trigger"
      theme="dark">
    <div class="logo"/>
    <SidebarMenu/>
  </a-layout-sider>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/app/SidebarMenu.vue'
import {ref, h} from "vue";
import {
  PieChartOutlined,
} from '@ant-design/icons-vue';

// @see https://vuejs.org/api/render-function.html#h
const trigger = h(PieChartOutlined);
const collapsible = ref<boolean>(true);
const collapsed = ref<boolean>(false);
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px;
}
</style>