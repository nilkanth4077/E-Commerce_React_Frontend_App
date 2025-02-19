import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full transition-transform duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="h-[14rem] w-[12rem]">
        <img
          className="object-fill object-center w-full h-full rounded-t-lg"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center text-center">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>

        {/* Product Price */}
        <p className="mt-2 text-lg font-medium text-gray-800">${product.price}</p>

        {/* Description with Wrapping & Ellipsis */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3 overflow-hidden text-ellipsis">
          {product.description}
        </p>

        {/* Ratings */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-sm text-gray-500">({product.reviewsCount} reviews)</span>
        </div>

        {/* Discount */}
        {product.discount && (
          <p className="mt-2 text-sm text-red-600 font-medium">
            {product.discount}% OFF
          </p>
        )}

        {/* Availability */}
        <p className={`mt-2 text-sm ${product.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
        </p>

        {/* Buttons Section */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleNavigate}
            className="bg-secondary text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-primary transition-all duration-300"
          >
            See More
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-400 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;