<script setup lang="ts">
import Sidebar from "@/components/app/Sidebar.vue";
import Header from "@/components/app/Header.vue";
</script>

<template>
    <a-layout has-sider class="app-layout">
      <Sidebar />
      <a-layout class="app-pages">
        <Header />
        <a-layout-content>
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<style>

</style>
