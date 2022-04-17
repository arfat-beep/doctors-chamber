import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return <footer>Copyright © {year}</footer>;
};

export default Footer;
