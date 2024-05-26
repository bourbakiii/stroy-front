<script setup>
import InputField from "@/components/Fields/InputField.vue";
import TextareaField from "@/components/Fields/TextareaField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import axiosInstance from "@/axiosInstance.js";
import {useRoute, useRouter} from "vue-router";
import {useToast} from "vue-toastification";
import ErrorsListElement from "@/components/Elements/ErrorsListElement.vue";
import Worker from "@/components/UI/Worker.vue";

const $router = useRouter();
const $route = useRoute();
const toast = useToast();

const workers = ref([]);
const selectedWorkers = ref([]);

onBeforeMount(async () => {
  const responseWorkers = await axiosInstance.get('/workers');
  workers.value = responseWorkers.data.data;
});

onBeforeMount(async () => {
  if (!$route.params.id) return;
  try {
    const response = await axiosInstance.get(`brigades/${$route.params.id}`)
    form.value.name = response.data.data.name;
    selectedWorkers.value = response.data.data.workers;
  } catch (error) {
    toast.error(error?.response.data.message || error.message);
  }
});

const form = ref({
  name: null,
});

const errors = ref({});

async function createHandler() {
  try {
    const response = await axiosInstance.post('brigades', {
      ...form.value,
      workerIds: selectedWorkers.value.map(el => el.id)
    });
    form.value.id = response.data.data;
    await $router.push({path: `/brigades/${response.data.data}`});
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}

async function editHandler() {
  try {
    await axiosInstance.put('brigades', {
      brigade_id: $route.params.id,
      ...form.value,
      workerIds: selectedWorkers.value.map(el => el.id)
    });
    toast.success("Success");
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    if (error?.response.status === 403) errors.value = error?.response.data.error;
  }
}

const submitHandler = computed(() => $route.params.id ? editHandler : createHandler);
const button_name = computed(() => $route.params.id ? 'Редактировать бригаду' : 'Создать бригаду');

const nonSelectedWorkers = computed(() => workers.value.filter(worker => !selectedWorkers.value.find(el => worker?.id === el?.id)))
</script>

<template>
  <form @submit.prevent="submitHandler" class="flex flex-col max-w-[600px] gap-[1rem]">
    <InputField required :isInvalid="errors['name']" v-model="form.name" label="Название бригады"/>
    <h3>Все сотрудники</h3>
    <div v-if="nonSelectedWorkers.length" class="grid grid-cols-3 gap-3">
      <Worker :key="worker.id" @click="()=>selectedWorkers.push(worker)" v-for="worker in nonSelectedWorkers"
              :worker="worker"/>
    </div>
    <div v-else class="text-sm opacity-50">Пусто</div>
    <h3>Выбранные сотрудники</h3>
    <div v-if="selectedWorkers.length" class="grid grid-cols-3 gap-3">
      <Worker :key="worker.id" @click="()=>selectedWorkers.splice(index, 1)" v-for="(worker, index) in selectedWorkers"
              :worker="worker"/>
    </div>
    <div v-else class="text-sm opacity-50">Пусто</div>

    <ButtonElement type="submit">{{ button_name }}</ButtonElement>
    <ErrorsListElement :errors="errors"/>
  </form>
</template>

<style scoped lang="scss">

</style>
