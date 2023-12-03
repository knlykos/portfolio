<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderItem from "@/components/common-components/HeaderItem.vue";
import FooterItem from "@/components/common-components/FooterItem.vue";
</script>

<template>
  <main class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
    <HeaderItem></HeaderItem>
    <RouterView/>
    <FooterItem></FooterItem>
  </main>
</template>

<style scoped>

</style>
