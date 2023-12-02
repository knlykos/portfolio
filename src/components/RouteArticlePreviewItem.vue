<script setup lang="ts">

import router from "@/router";

const props = defineProps({
  articles: {
    type: Array,
    required: true,
    default: "",
  },

})

const articleNumber = (index: number) => {
  index++
  return (index <= 9) ? "0" + index : index
}

const clickOnArticle = ($event) => {
  console.log($event)
  router.push('/article')
}

</script>
<template>
  <div class="overflow-y-auto">
    <h2 class="text-2xl font-bold p-5 border-b-[1px] border-gray-300 uppercase font-kanit text-gray-800">Articles</h2>
    <div @click="clickOnArticle" class="flex flex-col p-7 cursor-pointer" v-for="(article, index) in articles"
         :key="article.title">

      <div class="flex flex-col">
        <h2 class="text-lg font-bold"><span class="text-gray-300 font-bold pr-1 ">/</span><span
            class="text-black text-3xl font-bold pr-5 font-kanit">{{ articleNumber(index) }}</span><span
            class="font-kanit font-bold text-gray-800">{{ article.title }}</span></h2>
      </div>
      <div class="flex flex-col justify-start items-start">
        {{ article.description }}
      </div>
    </div>
  </div>
</template>