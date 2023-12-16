<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <div class="sidebar-layout flex flex-row">
        <Sidebar/>
        <RouterView/>
    </div>
</template>
