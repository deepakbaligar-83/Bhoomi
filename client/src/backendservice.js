
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
});

export const addUser = async (userData) => {
    try {
        const response = await apiClient.post('/user/add', userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const loginUser = async (loginData) => {
    try {
        const response = await apiClient.post('/login/check', loginData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const fetchData = async () => {
    try {
        const response = await apiClient.get('/user/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const addFeedback = async (data) => {
    try {
        const response = await apiClient.post('/feedback/add',data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getAllFeedback = async () => {
    try {
        const response = await apiClient.post('/feedback/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getAllCrops = async () => {
    try {
        const response = await apiClient.get('/crops/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getAllInfodata = async () => {
    try {
        const response = await apiClient.get('/infodata/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getAllMarketdata = async () => {
    try {
        const response = await apiClient.get('/marketdata/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getAllFaqdata = async () => {
    try {
        const response = await apiClient.get('/faqdata/getall');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};