import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { img, description, name, price } = service;
  const navigate = useNavigate();
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-details">
        <h3 className="service-title">
          <strong>Name : </strong>
          {name}
        </h3>
        <p className="service-description">
          <strong>Description :</strong> {description}
        </p>
        <p>
          <strong>Price :</strong> <span className="price-tag">{price}</span>
        </p>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Service;
