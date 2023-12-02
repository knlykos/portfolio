<script setup>
import {computed, ref} from 'vue';

const props = defineProps({
  mobile: {
    type: Boolean,
    default: false,
  },
  distanceTag: {
    type: String,
    default: "",
    required: true,
  },
  gaugeTagName: {
    type: String,
    default: "",
    required: true
  },
  percent: {
    type: Number,
    default: 0,
  },
  radius: {
    type: Number,
    required: true,
  },
  rest: Object,
});

const gaugeTagName = computed(() => props.gaugeTagName)

const strokeWidth = computed(() => props.radius * 0.2);
const innerRadius = computed(() => props.radius - strokeWidth.value);
const circumference = computed(() => innerRadius.value * 2 * Math.PI);
const arc = computed(() => circumference.value * 0.75);
const dashArray = computed(() => `${arc.value} ${circumference.value}`);
const transform = computed(() => `rotate(135, ${props.radius}, ${props.radius})`);
const offset = computed(() => arc.value - (props.percent / 100) * arc.value);
const wrapperClass = 'flex flex-row justify-between items-center w-full h-full bg-green-100'
</script>
<template>
  <div :class="wrapperClass">
    <div>{{ props.gaugeTagName }}</div>
    <svg :height="radius * 2" :width="radius * 2" v-bind="rest" v-if="props.mobile">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="15%" stop-color="#1267ff" stop-opacity="1"></stop>
          <stop offset="85%" stop-color="#98c0ff" stop-opacity="1"></stop>
        </linearGradient>
      </defs>
      <circle
          class="gauge_base"
          :cx="radius"
          :cy="radius"
          fill="transparent"
          :r="innerRadius"
          stroke="gray"
          :stroke-dasharray="dashArray"
          stroke-linecap="round"
          :stroke-width="strokeWidth"
          :transform="transform"
      />
      <circle
          class="gauge_percent"
          :cx="radius"
          :cy="radius"
          fill="transparent"
          :r="innerRadius"
          stroke="url(#grad)"
          :stroke-dasharray="dashArray"
          :stroke-dashoffset="offset"
          stroke-linecap="round"
          :stroke-width="strokeWidth"
          :style="{ transition: 'stroke-dashoffset 0.3s' }"
          :transform="transform"
      />
    </svg>
    <svg width="100" height="10" xmlns="http://www.w3.org/2000/svg">

      <rect  width="100" height="10" fill="#ddd"/>


      <rect :width="props.percent" :style="{ transition: 'width 0.3s' }" height="10" fill="#4caf50"/>

    </svg>
    <div>{{ props.distanceTag }}</div>
  </div>
</template>
