<script setup lang="ts">

import router from "@/router";
// This component use a prop articles which is an array of articles with title and description
// the template iterate in the array to create list of articles.\
const props = defineProps({
  articles: {
    type: Array,
    required: true,
    default: "",
  },

})
// articleNumber is use it to create the number of article
const articleNumber = (index: number) => {
  index++
  return (index <= 9) ? "0" + index : index
}
// The `clickOnArticle` function uses the router navigation function called `push` to navigate to the `/article` route.
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