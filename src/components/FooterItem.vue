<script setup lang="ts">

import {useFooterDataStore} from "@/stores/footer-data";

const footerStore = useFooterDataStore()
const title = footerStore.metadata.title
const sponsors = footerStore.metadata.sponsors
</script>
<template>
  <div class="rounded-3xl mt-1 w-full sm:h-60 bg-black">
    <div class="flex flex-col w-full h-full justify-center p-10">
      <div class="w-full border-white pb-10 items-center flex flex-col sm:flex-row">
        <div class="font-kanit text-white text-4xl">{{ title }}</div>
      </div>
      <div class="w-full border-white flex flex-col sm:flex-row justify-between items-center">
        <div class="flex flex-row items-center w-50 pb-10 sm:pb-0" v-for="sponsor in sponsors">
          <div><img :src="sponsor" alt="" srcset=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
