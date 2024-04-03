"use client";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://verkkokauppa-api.azurewebsites.net/orders"
      );
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <br />
            <h3>Order ID: {order._id}</h3>
            <p>Customer: {order.customer}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Shipping Address: {order.shippingAddress}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <br />
            <h3>Ordered Products:</h3>
            <ul>
              {order.orderedProducts.map((orderedProduct, index) => (
                <li key={index}>
                  <p>Product: {orderedProduct.product}</p>
                  <p>Quantity: {orderedProduct.quantity}</p>
                </li>
              ))}
            </ul>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
