import Github from "../img/github.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };
  const refreshPage = () => {
    window.location.reload();
  };

  // The basic functionality is there but there are no error messages etc..

  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const auth = useAuth();

  function login() {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/auth/login",
    }).then((res) =>
      res.data.username ? refreshPage() : console.log(res.data)
    );
  }

  if (auth.user) return <Navigate to="/home" />;
  return (
    <div className="login">
      {/* AUTHENTICATION WITH GITHUB *WORKING* */}
      <div className="wrapper">
        <div className="left">
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Continue with Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        {/* AUTHENTICATION WITH USERNAME/PASSWORD */}
        <div className="right">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setloginUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setloginPassword(e.target.value)}
          />
          <button
            className="submit"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
          <Link to="/register">No account? Register here </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
