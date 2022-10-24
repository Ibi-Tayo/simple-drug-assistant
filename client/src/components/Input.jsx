import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import SearchIcon from "@mui/icons-material/Search";
import PsychologyAltTwoToneIcon from "@mui/icons-material/PsychologyAltTwoTone";
import { Dna } from "react-loader-spinner";

export default function Input() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  const handleClick = () => {
    setLoading(true);
    setError(false);

    const updateDrugInfo = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/clinical/?" +
            new URLSearchParams({
              drugQuery: userInput,
            })
        );
        const dataRes = await response.json();
        setLoading(false);
        if (dataRes?.error) {
          setError(true);
        } else {
          setError(false);
          navigate("/info", { state: dataRes }); // send response to info component
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateDrugInfo();
  };
  return (
    <>
      <div className="inputContainer">
        <div className="inputWrapper">
          <div className="searchIcon">
            <SearchIcon color="disabled" fontSize="large" />
          </div>
          <input
            className="search-query"
            type={"text"}
            placeholder="Aspirin"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          ></input>{" "}
        </div>
        <div>
          <button
            className="search-button"
            name="button"
            type="submit"
            onClick={handleClick}
          >
            <PsychologyAltTwoToneIcon color="info" fontSize="large" />
            <h5 className="notification">Ask MARC</h5>
          </button>
          {loading ? (
            <div>
              <h3 className="notification">MARC is thinking...</h3>{" "}
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />{" "}
            </div>
          ) : null}
        </div>
        {error ? (
          <h5 className="notification">
            This drug is not recognised by the FDA
          </h5>
        ) : null}
      </div>
    </>
  );
}
