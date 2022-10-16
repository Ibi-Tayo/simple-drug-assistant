import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="hero-image">
      <div className="hero-text">
        <Header title="Drugs now make sense." />
        <button className="action-button" onClick={() => navigate("/register")}>
          Sign up
        </button>
        <button className="action-button" onClick={() => navigate("/login")}>
          Log in
        </button>
      </div>
    </div>
  );
}
