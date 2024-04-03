"use client";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.product}</h2>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>Location: {product.location}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>
              Availability:{" "}
              {product.availability ? "Available" : "Not available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
