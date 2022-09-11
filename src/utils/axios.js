import axios from 'axios'

export const BackEndAPI = axios.create({
    baseURL: 'https://work-portfolio-delta.vercel.app'
})