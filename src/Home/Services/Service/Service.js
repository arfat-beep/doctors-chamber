import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { img, description, name, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-details">
        <h3 className="service-title"><strong>Name : </strong>{name}</h3>
        <p className="service-description">
          <strong>Description :</strong> {description}
        </p>
        <p>
          <strong>Price :</strong> <span className="price-tag">{price}</span>
        </p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Service;
