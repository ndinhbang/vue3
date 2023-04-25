<script setup lang="ts">
import {
  PieChartOutlined,
} from '@ant-design/icons-vue';
import {ref} from "vue";

const selectedKeys = ref<string[]>(['2']);
const openKeys = ref<string[]>(['sub1']);

</script>

<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      theme="dark"
      :style="{ height: '100%', borderRight: 0 }"
  >
    <a-sub-menu key="sub1">
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
    <a-sub-menu key="sub2">
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
    <a-sub-menu key="sub3">
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
    <a-sub-menu key="sub4">
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
    <a-sub-menu key="sub4">
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
  </a-menu>
</template>

<style scoped>

</style>