import axios from "axios";

const getAllProducts = () => {
  return axios
    .get("http://localhost:8080/product/all")
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
    .get("http://localhost:8080/category/all")
    .then((res) => {
      console.log("Fetched Categories:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching categories:", err);
      throw err;
    });
};

export { getAllProducts, getAllCategories };
