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
    <div class="app-sidebar-inner">
      <div class="logo"/>
      <div class="app-sidebar-menu-wrap">
        <SidebarMenu/>
      </div>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/app/SidebarMenu.vue'
import {ref} from "vue";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined
} from '@ant-design/icons-vue';

interface Props {
  opened?: boolean
}

//@see: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
const props = withDefaults(defineProps<Props>(), {
  opened: false,
})

const collapsible = ref<boolean>(true);
const collapsed = ref<boolean>(false);
</script>

<style scoped>

</style>