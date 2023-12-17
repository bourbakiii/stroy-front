<script setup>
import Building from "@/components/UI/Building.vue";
import {onMounted, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";

const buildings = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get('/buildings');
  buildings.value = response.data.data;
});
</script>

<template>
  <Building v-for="building in buildings" :building="building"/>
</template>

<style scoped lang="scss">

</style>
