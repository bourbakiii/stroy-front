<script setup>

import InputField from "@/components/Fields/InputField.vue";
import TextareaField from "@/components/Fields/TextareaField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import {computed, onBeforeMount, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";
import {useRoute, useRouter} from "vue-router";
import {useToast} from "vue-toastification";
import ErrorsListElement from "@/components/Elements/ErrorsListElement.vue";

const $router = useRouter();
const $route = useRoute();
const toast = useToast();

let type_of_workers = ref(null);

onBeforeMount(async () => {
  const response = await axiosInstance.get("types/workers");
  type_of_workers.value = response.data.data.type_of_workers;
})

onBeforeMount(async () => {
  if (!$route.params.id) return;
  try {
    const response = await axiosInstance.get(`workers/${$route.params.id}`)
    form.value = response.data.data;
  } catch (error) {
    toast.error(error?.response.data.message || error.message);
  }
});


const form = ref({
  name: null,
  description: null,
});

const errors = ref({});

async function createHandler() {
  try {
    const response = await axiosInstance.post('workers', form.value);
    form.value.id = response.data.data;
    $router.push({path: `/workers/${response.data.data}`});
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}


async function editHandler() {
  try {
    await axiosInstance.put('workers', form.value);
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}

const submitHandler = computed(() => $route.params.id ? editHandler : createHandler);
const button_name = computed(() => $route.params.id ? 'Редактировать рабочего' : 'Создать рабочего');
</script>
а
<template>
  <form @submit.prevent="submitHandler" class="flex flex-col max-w-[600px] gap-[1rem]">
    <InputField required :isInvalid="errors['name']" v-model="form.name" label="ФИО работника"/>
    <TextareaField />
    <InputField required :isInvalid="errors['age']" v-model="form.age" label="Возраст"/>

    <ButtonElement type="submit">{{ button_name }}</ButtonElement>
    <ErrorsListElement :errors="errors"/>
  </form>
</template>

<style scoped lang="scss">

</style>
