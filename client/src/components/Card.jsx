import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Card.css";

export default function Card() {
  return (
    <div className="info-card">
      <h3>Example title</h3>
      <div className="text-container">
        <DeleteIcon className="svg_icons" fontSize="large" />
        <p className="card-text">
          This is some sample information text about a drug. Could it's mode of
          action, common side effects or just fun facts. adfaofj asjfdosf
          saidfja sf saofias osadifjas dfoiajsf aso.
        </p>
      </div>
    </div>
  );
}
