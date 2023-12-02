<!-- HeroItem.vue -->
<script setup lang="ts">
/**
 * Displays an Image with a custom text description
 * This component extends to the full of its parent component
 * @name HeroItem
 */
import sdBiker from "@/assets/jumper-2.png";
import ButtonItem from "@/components/common-components/ButtonItem.vue";
import router from "@/router";

const goToPath = () => {
  router.push('path')
}
</script>
<template>
  <div
      class="flex flex-col  h-[40vh] p-[24px] pt-0"
      :style="{
      backgroundImage: `url(${sdBiker})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }">
    <div class="flex flex-col m-10 items-start justify-center">
      <div class="text-5xl font-bold text-black font-kanit">SD Bike Paths</div>
      <div class="text-2xl text-white sm:text-black">Your Ultimate Guide to San Diego's Cycling Trails</div>
      <ButtonItem @click="goToPath" tag="BEST PATHS"></ButtonItem>
    </div>
  </div>
</template>
