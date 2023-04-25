<template>
    <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedKeys = ref<string[]>(['2']);
</script>

<style scoped>

</style>