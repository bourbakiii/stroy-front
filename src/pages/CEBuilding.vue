<script setup>
import CRUDBuilding from "@/components/Blocks/CRUDBuildingBlock.vue";
import {useRoute} from "vue-router";

const $route = useRoute();
</script>

<template>
  <main class="crud-building flex flex-col gap-[1rem] p-[1rem] w-full">
    <h1>{{ $route.name }}</h1>
    <CRUDBuilding/>
  </main>
</template>

<style scoped lang="scss">

</style>
