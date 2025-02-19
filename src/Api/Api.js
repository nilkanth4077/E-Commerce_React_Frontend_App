import axios from "axios";

export const BASE_URL = "https://e-commerce-backend-springboot.onrender.com";
const token = localStorage.getItem("token");

export const getAllProductsWithoutFilter = () => {
  return axios
    .get(`${BASE_URL}/product/no-filter/all`)
    .then((res) => {
      console.log("Fetched products:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      throw err;
    });
};

export const getAllCategories = () => {
  return axios
    .get(`${BASE_URL}/category/all`)
    .then((res) => {
      console.log("Fetched Categories:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching categories:", err);
      throw err;
    });
};

export const getCartOfUser = () => {
  return axios
    .get(`${BASE_URL}/cart/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("Fetched cart:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching cart:", err.response ? err.response.data : err.message);
      throw err;
    });
};