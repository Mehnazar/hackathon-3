import React from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl?: string;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-500 font-semibold">${product.price.toFixed(2)}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
