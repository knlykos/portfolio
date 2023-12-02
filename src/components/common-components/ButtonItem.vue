<!-- ButtonItem.vue -->
<script setup lang="ts">
/**
 * The awesome button
 * @name ButtonItem
 *
 */
const props = defineProps({
  tag: {
    /**
     * Element Tag
     */
    type: String,
    default: "",
    required: true
  }
})
</script>

<template>
  <button class="bg-black p-2 pl-4 pr-4 rounded-3xl text-white font-kanit transition duration-300 ease-out hover:bg-blue-700">{{ tag }}</button>
</template>
<style>
button {

}
</style>