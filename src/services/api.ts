import axios from 'axios';
import type { TotalSales, TrendingProduct, CategorySales, Product } from '@/types';

const API_BASE_URL = 'https://backend-gamma-five-74.vercel.app'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTotalSales = async (): Promise<TotalSales> => {
  const response = await api.get<any>(`/analytics/total_sales`);
  return response.data;
};

export const fetchTrendingProducts = async (): Promise<TrendingProduct[]> => {
  const response = await api.get<TrendingProduct[]>(`/analytics/trending_products`);
  return response.data;
};

export const fetchCategorySales = async (): Promise<CategorySales[]> => {
  const response = await api.get<CategorySales[]>(`/analytics/category_sales`);
  return response.data;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/products`);
  return response.data;
};

