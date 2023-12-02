<script setup lang="ts">
import sdBiker from "@/assets/jumper-2.png";
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
      <div class="text-2xl text-black">Your Ultimate Guide to San Diego's Cycling Trails</div>
      <button class="bg-black p-2 pl-4 pr-4 rounded-3xl text-white font-kanit">BEST PATHS</button>
    </div>
  </div>
</template>
