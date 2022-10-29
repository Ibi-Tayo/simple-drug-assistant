import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

export default function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState(false);
    const [accountCreation, setAccountCreation] = useState(false);
    const confirmPassword = useRef();
    function register() {
        if (confirmPassword.current.value === registerPassword) {
            axios({
                method: "POST",
                data: {
                    username: registerUsername,
                    password: registerPassword,
                },
                withCredentials: true,
                url: "http://localhost:3001/auth/register",
            }).then((res) => {
                console.log(res);
                setError(false);
                setAccountCreation(true);
            });
        } else {
            setError(true);
        }
    }
    return (
        <div className="register">
            <div className="right">
                <h1 className="register-title">Register.</h1>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    ref={confirmPassword}
                />
                <button className="submit" onClick={register}>
                    Register
                </button>
                {error ? (
                    <h5 style={{ color: "red" }}>Passwords do not match</h5>
                ) : null}
                {accountCreation ? (
                    <h5 style={{ color: "green" }}>
                        Account for "{registerUsername}" created!
                    </h5>
                ) : null}
            </div>
        </div>
    );
}
