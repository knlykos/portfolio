<!-- PathView.vue -->
<script setup lang="ts">
/**
 * This component shows
 * @name HeroItem
 */
import interactiveMap from './../assets/interactive-map.png'
import HeaderItem from "@/components/HeaderItem.vue";
import sdBikerBoxThree from "@/assets/sport-mountain-biking-womens-routing.jpg";
import GaugeItem from "@/components/GaugeItem.vue";
import MapItem from "@/components/MapItem.vue";
import RouteInfoItem from "@/components/RouteInfoItem.vue";
import RouteDescription from "@/components/RouteArticlePreviewItem.vue";
import {useRouteDataStore} from '@/stores/route-data'
import {useCounterStore} from '@/stores/counter'
import RouteArticlePreviewItem from "@/components/RouteArticlePreviewItem.vue";


const routeState = useRouteDataStore()
const articles = routeState.routeData.articles
const title = routeState.routeData.title
const table = routeState.routeData.characteristicTable

</script>
<template>
  <div class="p-2 font-bold text-2xl pt-2 pb-2 flex flex-row items-center"> <span
      class="material-symbols-outlined pr-5">
pedal_bike
</span>{{ title }}
  </div>
  <div class="sm:h-[calc(100vh_-_80px)] w-full ">
    <div class="bg-green-100 w-full h-[calc(50vh_-_40px)] overflow-auto">
      <MapItem></MapItem>
    </div>
    <div class="flex sm:flex-row flex-col">
      <div
          class="flex flex-col sm:flex-row  w-full sm:h-[calc(50vh_-_40px)] overflow-y-auto sm:overflow-hidden">
        <RouteInfoItem :data="table"></RouteInfoItem>
      </div>
      <div
          class="flex flex-col sm:flex-row sm:h-[calc(50vh_-_40px)] w-full h-full overflow-y-auto sm:overflow-hidden">
        <RouteArticlePreviewItem class="sm:pl-5" :articles="articles"
        ></RouteArticlePreviewItem>
      </div>
    </div>
  </div>
</template>

<style>

</style>
