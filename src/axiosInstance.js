import axios from 'axios';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export default axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {'Authorization': `Bearer ${cookies.get("token")}`}
});
