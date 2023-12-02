<script setup lang="ts">
import {useRouteDataStore} from "@/stores/route-data";

const prop = defineProps({
  article: {
    required: true,
    default: {},
    type: Object
  }

})
const routeState = useRouteDataStore()
const article = routeState.routeData.article
</script>
<template>
  <div class="w-full h-full sm:p-32">
    <div class="flex flex-col items-center">
      <h2 class="p-5 font-bold text-3xl sm:text-5xl text-center font-kanit">{{ article.title }}</h2>
      <p class="text-md font-kanit">By Nefi Lopez Garcia</p>
    </div>
    <div class="flex flex-col p-5" v-for="(section, index) in article.sections">
      <span class="font-bold sm:text-2xl pb-7 font-kanit">{{ index + 1 }}. {{ section.sectionTitle }}</span>
      <span class="text-lg">{{ section.content }}
        </span>

      <img class="p-10" :src="section.image">

    </div>
  </div>
</template>
<script>
</script>