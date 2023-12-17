import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'reset-css';
import '@/assets/scss/global.scss';
import "vue-toastification/dist/index.css";
import router from './router/router';
import App from './App.vue'
import Toast from "vue-toastification";

const pinia = createPinia();
const app = createApp(App)


app.use(router).use(pinia).use(Toast,{
    toastClassName: 'toast',
    timeout:2000,
}).mount('#app');
