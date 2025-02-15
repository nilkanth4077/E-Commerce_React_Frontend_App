import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getAllProductsWithoutFilter = () => {
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

const getAllCategories = () => {
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

export { getAllProductsWithoutFilter, getAllCategories, BASE_URL };
