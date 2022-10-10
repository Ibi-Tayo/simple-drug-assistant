import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  function register() {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/auth/register",
    }).then((res) => console.log(res));
  }
  return (
    <div className="login">
      <div className="right">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button className="submit" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}
