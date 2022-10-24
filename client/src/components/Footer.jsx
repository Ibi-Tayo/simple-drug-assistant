import React from "react";
import "./Footer.css";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <h5>☻ Ibi. ☻ {date} </h5>
    </div>
  );
}
