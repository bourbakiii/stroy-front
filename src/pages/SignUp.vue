<script setup>
import axios from 'axios';
import {onBeforeMount, reactive, ref} from "vue";
import InputField from "@/components/Fields/InputField.vue";
import SelectField from "@/components/Fields/SelectField.vue";
import ButtonElement from "@/components/Elements/ButtonElement.vue";
let type_of_users = ref(null);

onBeforeMount(async ()=> {
    console.log("logger")
    const response = await axios.get("http://localhost:8000/api/types/users");
    console.log(response.data.data);
    type_of_users.value = response.data.data.type_of_users;
    console.log(type_of_users);
})
const form = reactive({
    email: null,
    password: null,
    password_confirmation: null,
    user_type_id: null
});
async function signUpHandler(){
    const response = await axios.post("http://localhost:8000/api/auth/signup", form);
    console.log("The response is:", response);
}
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 w-full p-[1rem]">
        <form @submit.prevent="signUpHandler" class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="space-y-4 md:space-y-6 p-[1rem]">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <div class="space-y-4 md:space-y-6">
                        <InputField v-model.trim="form.first_name" label="First name" type="text" name="first_name" id="first_name" required />
                        <InputField v-model.trim="form.middle_name" label="Middle name" type="text" name="middle_name" id="middle_name" required />
                        <InputField v-model.trim="form.last_name" label="Last name" type="text" name="last_name" id="last_name" required />
                        <InputField v-model.trim="form.email" label="Email" type="email" name="email" id="email" required />
                        <InputField v-model.trim="form.password" placeholder="••••••••" label="Password" name="password" type="password" required />
                        <InputField v-model.trim="form.password_confirmation" placeholder="••••••••" label="Password confirmation" name="password_confirmation" type="password" required />
                        <SelectField v-model.trim="form.user_type_id" :options="type_of_users" value_key="id" label_key="name" label="Type"/>

                        <ButtonElement type="submit"  />
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                        <div class="flex items-center justify-between">
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped lang="scss">

</style>
