import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-backend-springboot.onrender.com/product/get/${productId}`
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center text-xl text-red-500">Product Not Found</div>;

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold text-primary">
            ${product.discountedPrice}{" "}
            {product.discountPercent > 0 && (
              <span className="text-red-500 line-through ml-2">${product.price}</span>
            )}
          </p>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <p className="text-gray-500">Color: {product.color}</p>
          <p className="text-gray-500">Category: {product.category?.name}</p>
          <p className={`text-sm ${product.quantity > 0 ? "text-green-500" : "text-red-500"}`}>
            {product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
          </p>

          {/* Buy Now & Add to Cart Buttons */}
          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all">
              Buy Now
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;