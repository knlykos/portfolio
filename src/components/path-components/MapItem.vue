<script setup lang="ts">
import interactiveMap from "@/assets/interactive-map.png";
// This component shows a custom map of the Silver Strand area. It will help cyclists
// become familiar with the route or to serve as a future reference.
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
</script>
<template>

    <div class="bg-red-100 w-[120vw] h-[150vh]" :style="backgroundImage(interactiveMap)"></div>

</template>
