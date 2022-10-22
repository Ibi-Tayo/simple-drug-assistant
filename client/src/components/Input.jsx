import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Input() {
  const [userInput, setUserInput] = useState("");
  // const [data, setData] = useState({});
  let navigate = useNavigate();
  const handleClick = () => {
    const updateDrugInfo = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/clinical/?" +
            new URLSearchParams({
              drugQuery: userInput,
            })
        );
        const dataRes = await response.json();
        navigate("/info", { state: dataRes }); // send response to info component
      } catch (error) {
        console.log(error);
      }
    };
    updateDrugInfo();
    // where the drug info will be
  };
  return (
    <>
      <div className="inputContainer">
        <div>
          <SearchIcon />
          <input
            className="search-query"
            type={"text"}
            placeholder="Enter a drug"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
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
