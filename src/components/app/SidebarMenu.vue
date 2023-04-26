<script setup lang="ts">
import {
  PieChartOutlined,
} from '@ant-design/icons-vue';
import {ref} from "vue";

const selectedKeys = ref<string[]>([]);
let openKeys = ref<string[]>(['sub1']);
const rootSubmenuKeys = ref<string[]>(['sub1', 'sub2', 'sub3', 'sub4', 'sub5']);

const onOpenChange = (opKeys: string[]) => {
  const latestOpenKey = opKeys.find(key => openKeys.value.indexOf(key) === -1);
  if (rootSubmenuKeys.value.indexOf(latestOpenKey!) === -1) {
    openKeys.value = opKeys;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }
}
</script>

<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      class="app-sidebar-menu"
      :subMenuCloseDelay="0.05"
      :subMenuOpenDelay="0"
      :open-keys="openKeys"
      @openChange="onOpenChange"
  >
    <a-sub-menu key="sub1" :popupOffset="[1,0]">
      <template #title>
        <pie-chart-outlined/>
        <span>
                subnav 1
              </span>
      </template>
      <a-menu-item key="1">option1</a-menu-item>
      <a-menu-item key="2">option2</a-menu-item>
      <a-menu-item key="3">option3</a-menu-item>
      <a-menu-item key="4">option4</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2" :popupOffset="[1,0]">
      <template #title>
        <pie-chart-outlined/>
        <span>
                subnav 2
              </span>
      </template>
      <a-menu-item key="5">option5</a-menu-item>
      <a-menu-item key="6">option6</a-menu-item>
      <a-menu-item key="7">option7</a-menu-item>
      <a-menu-item key="8">option8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3" :popupOffset="[1,0]">
      <template #title>
        <pie-chart-outlined/>
        <span>
                subnav 3
              </span>
      </template>
      <a-menu-item key="9">option9</a-menu-item>
      <a-menu-item key="10">option10</a-menu-item>
      <a-menu-item key="11">option11</a-menu-item>
      <a-menu-item key="12">option12</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub4" :popupOffset="[1,0]">
      <template #title>
        <pie-chart-outlined/>
        <span>
                subnav 4
              </span>
      </template>
      <a-menu-item key="13">option9</a-menu-item>
      <a-menu-item key="14">option10</a-menu-item>
      <a-menu-item key="15">option11</a-menu-item>
      <a-menu-item key="16">option12</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub5" :popupOffset="[1,0]">
      <template #title>
        <pie-chart-outlined/>
        <span>
                subnav 5
              </span>
      </template>
      <a-menu-item key="17">option9</a-menu-item>
      <a-menu-item key="18">option10</a-menu-item>
      <a-menu-item key="19">option11</a-menu-item>
      <a-menu-item key="20">option12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style scoped>

</style>