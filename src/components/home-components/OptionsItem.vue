<!-- OptionsItem.vue -->
<script setup lang="ts">
import sdBikerBoxOne from "@/assets/box-1-jumper.png";
import sdBikerBoxTwo from "@/assets/3-mtbiker.png";
import sdBikerBoxThree from "@/assets/1-mtbiker.png";
import ArrowRightIcon from "@heroicons/vue/24/solid/ArrowRightIcon";
import ButtonItem from "@/components/common-components/ButtonItem.vue";
import router from "@/router";

/**
 * The OptionsItem is a static component designed to display a series of boxes.
 */

/**
 * backgroundImage create a common backgroundImage style
 * @param image - accepts an image as a module
 */
const backgroundImage = (image: Object) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

const goToPath = () => {
  router.push('path')
}
</script>
<template>
  <div class="flex sm:flex-col flex-row  w-full mt-1">
    <div class="flex sm:flex-row flex-col w-full">
      <div class="sm:w-64  h-80 sm:flex-[2] p-5 flex flex-col justify-end" :style="backgroundImage(sdBikerBoxOne)">
        <div class="text-white text-2xl font-kanit">Find your Path</div>
        <div>
          <ButtonItem @click="goToPath" tag="GO TO"></ButtonItem>
        </div>
      </div>
      <div class="sm:w-64 h-80 sm:mt-0 mt-1 sm:mr-1 sm:ml-1 w-full sm:flex-[2]" :style="backgroundImage(sdBikerBoxTwo)">
        <div class="flex flex-col w-full h-full">
          <div class="flex-1"></div>
          <div class="text-white p-4 bg-black/90 backdrop-blur border-t-black">
            <div class="border-b pb-2 flex justify-between font-kanit">Blog
              <ArrowRightIcon class="h-6"></ArrowRightIcon>
            </div>
            <div class="border-b pb-2 pt-2 flex justify-between font-kanit">Safety Tips
              <ArrowRightIcon class="h-6"></ArrowRightIcon>
            </div>
            <div class="border-b pb-2 pt-2 flex justify-between font-kanit">Community Feedback
              <ArrowRightIcon class="h-6"></ArrowRightIcon>
            </div>
            <div class="border-b pb-2 pt-2 flex justify-between font-kanit">Weather Alert
              <ArrowRightIcon class="h-6"></ArrowRightIcon>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-64 h-80 sm:mt-0 mt-1 flex-[3]" :style="backgroundImage(sdBikerBoxThree)">
        <div class="flex h-80 flex-col w-full p-5">
          <div class="flex-1"></div>
          <div class="flex items-center">
            <div class="text-white text-6xl font-kanit">
              +10K
            </div>
            <div class="text-white text-3xl ml-10 font-kanit">Paths to Explore</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
