<script setup>
defineProps({
  worker:{
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/workers/${$props.worker.id}`" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{$props.worker.name}}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$props.worker.type_of_worker.name}}</p>
  </RouterLink>

</template>

<style scoped lang="scss">

</style>
