import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
  items: [],

  getAllProducts: async () => {
    try {
      const res = await axiosInstance.post("product/getAll");
      set({ items: res.data });
    } catch (error) {
      console.log(error);
    }
  },

  getProducts: async (category) => {
    try {
    } catch (error) {}
  },
}));
