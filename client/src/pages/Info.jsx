import React from "react";
import { useLocation } from "react-router-dom";
import "./Info.css";
import Card from "../components/Card";
import MedicationIcon from "@mui/icons-material/Medication";
import BiotechIcon from "@mui/icons-material/Biotech";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function Info() {
    const location = useLocation();
    console.log(location.state);
    return (
        <div className="info">
            <Card
                title="drug summary"
                icon={<MedicationIcon className="svg_icons" fontSize="large" />}
                text={location.state.drugSummary}
            />
            <Card
                title="pharm class"
                icon={<BiotechIcon className="svg_icons" fontSize="large" />}
                text={location.state.drugClass}
            />
            <Card
                title="mechanism of action"
                icon={<BiotechIcon className="svg_icons" fontSize="large" />}
                text={location.state.MOA}
            />
            <Card
                title="side effects"
                icon={
                    <HealthAndSafetyIcon
                        className="svg_icons"
                        fontSize="large"
                    />
                }
                text={location.state.sideEffects}
            />
        </div>
    );
}

export default Info;
