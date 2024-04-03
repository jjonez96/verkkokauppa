"use client";

import React, { useState } from "react";
import Products from "./Products";
import Orders from "./Orders";
import Customers from "./Customers";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("products");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={selectedTab === "products" ? "active" : ""}
          onClick={() => handleTabChange("products")}
        >
          Products
        </button>
        <button
          className={selectedTab === "orders" ? "active" : ""}
          onClick={() => handleTabChange("orders")}
        >
          Orders
        </button>
        <button
          className={selectedTab === "customers" ? "active" : ""}
          onClick={() => handleTabChange("customers")}
        >
          Customers
        </button>
      </div>
      <div className="tab-content">
        {selectedTab === "products" && <Products />}
        {selectedTab === "orders" && <Orders />}
        {selectedTab === "customers" && <Customers />}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tabs button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin: 0 10px;
          padding: 10px;
          font-size: 16px;
          outline: none;
        }
        .tabs button.active {
          border-bottom: 2px solid black;
        }
        .tab-content {
          border: 1px solid #ddd;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Page;
