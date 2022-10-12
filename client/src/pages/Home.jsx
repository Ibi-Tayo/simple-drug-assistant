import "./Home.css";
import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header title="Search for a drug or product"></Header>
        <Input></Input>
      </div>
    </>
  );
}
