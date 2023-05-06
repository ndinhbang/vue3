<script setup lang="ts">
import {ref} from "vue";

const menu = ref([
  {
    title: '内容一',
    open: true,
    children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
  },
  {
    title: '内容二',
    children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
  },
  {
    title: '内容三（默认展开）',
    open: true,
    children: [{ title: '子内容1(禁用)', disabled: true }, {
      title: '子内容2(默认激活)',
      active: true
    }, { title: '子内容3' }],
  },
])
</script>

<template>
  <d-layout>
    <d-header class="dheader-2">
      <img class="logo-devui" src="https://devui.design/components/assets/logo.svg" alt="" />
      <span class="text">DevUI</span>
    </d-header>
    <d-layout>
      <d-aside class="daside-2">
        <d-accordion :data="menu" class="menu"></d-accordion>
      </d-aside>
      <d-content class="dcontent-2">
        <d-breadcrumb class="dbreadcrumb">
          <d-breadcrumb-item>
            <span>DevUI</span>
          </d-breadcrumb-item>
          <d-breadcrumb-item>
            <span>面包屑</span>
          </d-breadcrumb-item>
        </d-breadcrumb>
        <div class="inner-content"></div>
      </d-content>
    </d-layout>
    <d-footer class="dfooter-2">footer</d-footer>
  </d-layout>
</template>

<style scoped>

</style>
