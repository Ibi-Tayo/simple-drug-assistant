import React from "react";

import "./Card.css";

export default function Card({ title, icon, text }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <div className="text-container">
        {icon}
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
