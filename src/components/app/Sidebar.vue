<template>
  <a-layout-sider
      class="app-sidebar"
      v-model:collapsed="collapsed"
      :collapsible="collapsible"
      theme="dark">
    <template #trigger>
      <DoubleLeftOutlined v-if="!collapsed"/>
      <DoubleRightOutlined v-else/>
    </template>
    <div class="logo"/>
    <SidebarMenu/>
  </a-layout-sider>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/app/SidebarMenu.vue'
import {ref} from "vue";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined
} from '@ant-design/icons-vue';

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