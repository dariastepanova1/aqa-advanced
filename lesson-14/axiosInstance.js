import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    validateStatus: () => true,
});

// REQUEST LOGGING
axiosInstance.interceptors.request.use((config) => {
    console.log('==============================');
    console.log('➡️ REQUEST LOG');
    console.log('METHOD:', config.method?.toUpperCase());
    console.log('URL:', config.url);
    console.log('==============================');

    return config;
});

// RESPONSE LOGGING
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('==============================');
        console.log('📥 RESPONSE LOG');
        console.log('URL:', response.config.url);
        console.log('STATUS:', response.status);
        console.log('==============================');

        return response;
    },
    (error) => {
        console.log('==============================');
        console.log('❌ ERROR LOG');
        console.log('DATE:', new Date().toISOString());
        console.log('URL:', error.config?.url);
        console.log('STATUS:', error.response?.status);
        console.log('MESSAGE:', error.message);
        console.log('==============================');

        return Promise.reject(error);
    }
);

export default axiosInstance;