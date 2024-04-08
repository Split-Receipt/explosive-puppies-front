import axios, { AxiosResponseHeaders, InternalAxiosRequestConfig } from 'axios';

const _transformResponse = function(this: InternalAxiosRequestConfig, data: any, headers: AxiosResponseHeaders, status?: number): any {
  return JSON.parse(data);
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: _transformResponse
})

export default api