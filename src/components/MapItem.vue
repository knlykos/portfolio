<script setup lang="ts">
import interactiveMap from "@/assets/interactive-map.png";
</script>
<template>

    <div class="bg-red-100 w-[120vw] h-[150vh]" :style="{
              backgroundImage: `url(${interactiveMap})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }"></div>

</template>
