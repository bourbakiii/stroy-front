<script setup>
import OneSlideSwiper from "@/components/Swipers/OneSlideSwiper.vue";
import {SwiperSlide} from 'swiper/vue';
import {computed, ref, watch, watchEffect} from "vue";

const $emit = defineEmits(['onload', 'update:modelValue']);
const $props = defineProps({
  modelValue: {
    required: false,
    default: null
  },
  isInvalid: {
    required: false,
    default: false
  }
})

function onLoadHandler(e) {
  console.log("on load handler", e.target.files);
  console.log($emit('modelValue', e));
  // Array.from(e.target.files).forEach(el => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(el);
  //   fileReader.onload = () => {
  //     console.log("file readed data,", fileReader.result);
  //   };
  // });
  $emit('update:modelValue', e.target.files);
}


const computedURLs = ref([]);
watchEffect(() => {
  if (!$props.modelValue || !$props.modelValue.length) computedURLs.value = [];

  Array.from($props.modelValue).forEach((file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      console.log("RESULTED", fileReader.result);
      computedURLs.value.push(fileReader.result);
    };
  })
});

</script>

<template>
  <div class="flex items-center justify-center w-full relative">
    {{ computedURLs }}
    <label v-if="!$props.modelValue || !$props.modelValue.length" :for="$attrs.inputId"
           class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <span class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or
          drag and drop</p>
      </span>
    </label>
    <OneSlideSwiper v-else>
      <template #slides>
        <SwiperSlide v-for="slideURL in computedURLs">
          <label :for="$attrs.inputId">
            <img :src="slideURL" alt=""/>
          </label>
        </SwiperSlide>
      </template>
    </OneSlideSwiper>
    <input :id="$attrs.inputId" :value="modelValue" @change="onLoadHandler" v-bind="$attrs" type="file"
           class="w-0 h-0 absolute top-1/2 left-1/2 -translate-y-1/2"/>
  </div>
</template>

<style scoped lang="scss">

</style>
