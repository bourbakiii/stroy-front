<template>
  <div class="grid grid-cols-3 gap-2 w-full">
    <RouterLink :to="`brigades/${brigade.id}`"
                class="flex flex-col bg-primary text-white gap-2 p-3 rounded hover:no-underline hover:text-black transition-[1s] hover:shadow-[0px_0px_20px_2px_#00000024]" :key="brigade.id"
                v-for="brigade in brigades">
      <div class="flex justify-between ">
        <span>{{ brigade.name }}</span>
      </div>
      <ul class="flex flex-col gap-0">
        <li class="text-sm"
            v-for="worker in brigade.workers.map(el=>({...worker, name: el.name.split(' ').slice(0,2).join(' ')}))">
          {{ worker.name }}
        </li>
      </ul>
      <span class="text-[10px]">Кол-во рабочих: {{ brigades.length }}</span>

    </RouterLink>
  </div>
  <RouterLink to="/brigades/create">
    <ButtonElement>Создать бригаду</ButtonElement>
  </RouterLink>
</template>
<script setup>
import ButtonElement from "@/components/Elements/ButtonElement.vue";

defineProps({
  brigades: {
    required: true,
    type: Array
  }
})
</script>

