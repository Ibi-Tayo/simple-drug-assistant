import "./Search.css";
import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Search() {
  return (
    <>
      <div className="search">
        <Header title="Search for a drug or product"></Header>
        <Input></Input>
      </div>
    </>
  );
}
