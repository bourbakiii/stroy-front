import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'reset-css';
import '@/assets/scss/global.scss';
import router from './router/router';
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App)

app.use(router).use(pinia).mount('#app');
