import axios from "axios";

// Define types for your data models
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface Order {
  id: number;
  user_id: number;
  total: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  product: Product;
}

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel API URL
});

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const response = await api.post("/products", product);
  return response.data;
};

export const updateProduct = async (
  id: number,
  product: Partial<Product>
): Promise<Product> => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};

// Define other API functions for orders and cart...
