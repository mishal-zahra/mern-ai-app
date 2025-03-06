import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || "",

  login: async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      set({ token: data.token, user: jwtDecode(data.token) });
    } catch (error) {
      console.error(error.response?.data?.error || "Login failed");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: "", user: null });
  },
}));

export default useAuthStore;
