<script setup lang="ts">
const props = defineProps({
  data: {
    type: String,
    default: [],
    required: true
  }
})
const data = props.data
</script>
<template>
  <div class="w-full overflow-auto">
    <div class="flex justify-center flex-col">
    </div>
    <table role="table" class="w-full bg-gray-100">
      <tr class="bg-gray-200 border-b-[1px] border-gray-300 border-t-[1px]">
        <th>
          <div class="border-0 bg-gray-200 font-bold text-gray-800 uppercase p-4 text-left font-kanit text-2xl">Feature</div>
        </th>

        <th>
          <div class="border-0 bg-gray-200 font-bold text-gray-800 uppercase p-4 text-left font-kanit text-2xl">Details</div>
        </th>
      </tr>
      <tr class="border-b-[1px]" v-for="(item, index) in data" :key="index + item.Feature">
        <td>
          <div class="font-bold text-gray-800 p-2 pl-4 text-left font-kanit text-lg">{{ item.Feature }}</div>
        </td>
        <td>
          <div class="text-gray-800 p-2 pl-4 text-left font-dosis font-bold">{{ item.Details }}</div>
        </td>
      </tr>

    </table>
  </div>
</template>