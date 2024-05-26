<script setup>
import {onMounted, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";
import Worker from "@/components/UI/Worker.vue";

const workers = ref([]);

onMounted(async () => {
  const response = await axiosInstance.get('/workers');
  workers.value = response.data.data;
});
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <RouterLink class="hover:no-underline" v-for="worker in workers" :to="`/workers/${worker.id}`">
      <Worker :worker="worker"/>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">

</style>
