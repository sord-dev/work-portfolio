import axios from 'axios'

export const BackEndAPI = axios.create({
    baseURL: 'http://localhost:3000'
})