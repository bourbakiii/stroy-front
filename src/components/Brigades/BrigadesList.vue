<template>
  <div class="brigades">
    Бригады
  </div>

  <RouterLink to="/brigades/create"><ButtonElement>Создать бригаду</ButtonElement></RouterLink>
</template>
<script setup>
import ButtonElement from "@/components/Elements/ButtonElement.vue";
</script>