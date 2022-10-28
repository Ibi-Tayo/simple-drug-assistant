import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect, useState } from "react";

const Navbar = (props) => {
    const auth = useAuth();
    const location = useLocation();
    const [navBg, setNavBg] = useState("#EEEEEE");
    useEffect(() => {
        if (window.location.pathname === "/login") {
            setNavBg("#222831");
        } else {
            setNavBg("#EEEEEE");
        }
    }, [location]);

    const logout = () => {
        window.open("https://api-marc.herokuapp.com/auth/logout", "_self");
    };
    return (
        <div
            className="navbar"
            style={{
                backgroundColor: navBg,
                color: navBg === "#EEEEEE" ? "#222831" : "#EEEEEE",
            }}
        >
            <span className="logo">
                {auth.user ? (
                    <Link className="link" to="/search">
                        MARC.
                    </Link>
                ) : (
                    <Link className="link" to="/">
                        MARC.
                    </Link>
                )}
            </span>
            {auth.user ? (
                <ul className="list">
                    <li className="listItem">
                        <img
                            src={
                                auth.user.photos
                                    ? auth.user.photos[0].value
                                    : null
                            }
                            alt=""
                            className="avatar"
                        />
                    </li>
                    <li className="listItem">
                        {auth.user.displayName
                            ? auth.user.displayName
                            : auth.user.username}
                        <AccountBoxIcon />
                    </li>
                    <li className="listItem">
                        <Link className="link" to="search">
                            Search <SearchIcon />
                        </Link>
                    </li>

                    <li className="listItem" onClick={logout}>
                        Logout <LogoutIcon />
                    </li>
                    <li className="listItem">
                        <Link className="link" to="about">
                            About <InfoIcon />
                        </Link>
                    </li>
                </ul>
            ) : (
                <>
                    <ul className="list">
                        <li className="listItem">
                            <Link className="link" to="login">
                                Login <LoginIcon />
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link className="link" to="about">
                                About <InfoIcon />
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default Navbar;
