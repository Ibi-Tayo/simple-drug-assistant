import React from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";

export default function Input() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/info");
    // where the drug info will be
  };
  return (
    <>
      <div className="inputContainer">
        <div>
          <input
            className="search-query"
            type={"text"}
            placeholder="Enter a drug"
          ></input>{" "}
        </div>
        <div>
          {/* change to icon button from google material UI*/}
          <button
            className="search-button"
            name="button"
            type="submit"
            onClick={handleClick}
          >
            <i className="fa fa-home"></i>
            Click here
          </button>

          {/* put an icon here */}
        </div>
      </div>
    </>
  );
}
