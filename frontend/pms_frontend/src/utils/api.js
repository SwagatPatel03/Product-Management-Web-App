import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Creating axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adding request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth API
export const registerUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

// Products API
export const getProducts = async (filters = {}) => {
  const queryParams = {};

  if (filters.category) {
    queryParams.category = filters.category;
  }

  if (filters.search) {
    queryParams.search = filters.search;
  }

  if (filters.priceMin !== undefined) {
    queryParams.priceMin = filters.priceMin;
  }

  if (filters.priceMax !== undefined) {
    queryParams.priceMax = filters.priceMax;
  }

  if (filters.rating !== undefined) {
    queryParams.rating = filters.rating;
  }

  if (filters.sortBy) {
    queryParams.sortBy = filters.sortBy;
  }

  if (filters.page) {
    queryParams.page = filters.page;
  }

  if (filters.limit) {
    queryParams.limit = filters.limit;
  }

  const response = await api.get('/products', { params: queryParams });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("API delete error:", error.response?.data);
    throw error; // Re-throw to be caught by the component
  }
};

export default api;
