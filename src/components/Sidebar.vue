<script setup>
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import {routes} from "@/router/router.js";
</script>
<template>
  <aside id="logo-sidebar"
         class="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shrink-0"
         aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
      <RouterLink to="#" class="flex items-center ps-2.5 mb-5">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Omnia Logo"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Omnia</span>
      </RouterLink>
      <ul class="space-y-2 font-medium">
        <li v-for="route in routes.filter(el=>el.meta.show_in_sidebar)" :key="route.path">
          <RouterLink :to="route.path"
                      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ms-3">{{route.name}}</span>
          </RouterLink>
        </li>
      </ul>
      <ButtonElement class='mt-3 bg-red-500'>Выход</ButtonElement>
    </div>
  </aside>

</template>
