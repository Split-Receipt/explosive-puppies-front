import axios, {AxiosInstance, AxiosResponseHeaders, InternalAxiosRequestConfig} from 'axios';

class HTTP {
    axiosInstance: AxiosInstance | undefined;

    init() {
        this.axiosInstance = axios.create({
            baseURL: 'https://76f54c93-5bbf-4204-a36a-b595077266e8.mock.pstmn.io',
            timeout: 1000,
            transformResponse: this._transformResponse
          });
    };

    _transformResponse(this: InternalAxiosRequestConfig, data: any, headers: AxiosResponseHeaders, status?: number): any {
        return JSON.parse(data);
    };

    async get(path: string) {
        const response = await this.axiosInstance?.get(path) as any;
        return response.data;
    }

    async post(path: string, data: any) {
        const response = await this.axiosInstance?.post(path, data) as any;
        return response.data;
    };
}

const httpInstance = new HTTP();
httpInstance.init();

export default httpInstance;