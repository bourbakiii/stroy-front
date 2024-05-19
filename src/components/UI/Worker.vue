<script setup>
defineProps({
  worker:{
    required: true
  }
})
</script>

<template>
    <RouterLink  :to="`/workers/${$props.worker.id}`" class="w-full max-w-sm shadow-2xl bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
      <div>
        <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
      </div>
      <div class="text-center py-8 sm:py-6">
        <p class="text-xl text-gray-700 font-bold mb-2">{{$props.worker.name}}</p>
        <p class="text-base text-gray-400 font-normal">{{$props.worker.type_of_worker.name}}</p>
      </div>
    </RouterLink>

</template>

<style scoped lang="scss">

</style>
