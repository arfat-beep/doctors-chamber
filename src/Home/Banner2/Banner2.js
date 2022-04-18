import React from "react";
import { Link } from "react-router-dom";
import "./Banner2.css";
const Banner2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="doctor-details mt-md-5">
            <h1 className="display-3">Doctor's Chamber</h1>
            <h3 className="display-5">Rifa Moni Tuli</h3>
            <p className="ms-2">
              MBBS <br />
              MS(Orthopaedics) <br />
              BCS(Health) <br />
              Accociate Professor(Dept. of Orthopaedics) <br />
              Chittagong Medical Collage Hospital
            </p>
            <a
              className="btn btn-primary px-5 py-2"
              target="_blank"
              href="https://arfat.xyz/"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img
            className="w-100"
            src="https://i.ibb.co/f9dCBny/banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
