import axios, {AxiosResponse} from "axios";

const API = process.env.API_URL

const api = axios.create({ baseURL: API })

api.defaults.headers.common['Content-Language'] = 'ru';

const requests = {
    get: <T>(url: string) => api.get<null, AxiosResponse<T>>(url),
    post: <T>(url: string, data?: object) => api.post<null, AxiosResponse<T>>(url, data),
}

export default requests