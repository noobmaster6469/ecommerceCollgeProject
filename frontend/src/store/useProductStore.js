import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
  items: [],
  product: {},

  getProducts: async (category) => {
    try {
      const res = await axiosInstance.post("product/get", { category });
      set({ items: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  getProduct: async (id) => {
    try {
      const res = await axiosInstance.post(`product/get/${id}`);
      set({ product: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  editProduct: async (id, data) => {
    try {
      const res = await axiosInstance.put(`product/edit/${id}`, data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await axiosInstance.delete(`product/delete/${id}`);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  addProduct: async (data) => {
    try {
    } catch (error) {}
  },
}));
