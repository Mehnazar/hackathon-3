"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { createClient } from "@sanity/client";

const sanity = createClient({
  projectId: "9vgl9df0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type=="product"]{
        _id,
        name,
        price,
        description,
        discountPercentage,
        "imageUrl":image.asset->url,
        tags
      }`;
      const data = await sanity.fetch<Product[]>(query);

      console.log("Fetched Products:", data); // Debugging output

      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products: ", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-md bg-white">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                  unoptimized
                />
              ) : (
                <div className="w-[300px] h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <h2 className="text-lg font-medium mt-2">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-blue-500 font-semibold mt-2">${product.price.toFixed(2)}</p>

              {product.discountPercentage > 0 && (
                <p className="text-green-500 font-semibold">
                  Sale: ${((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}
                </p>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No products found</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="fixed bottom-0 right-0 bg-white p-4 shadow-lg border rounded-md w-80">
        <h3 className="font-bold text-lg">Cart Summary</h3>
        {cart.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between gap-4">
                <Image
                  src={item.imageUrl ?? "/placeholder-image.jpg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductCards), { ssr: false });
