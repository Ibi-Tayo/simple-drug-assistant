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
  const [navBg, setNavBg] = useState("white");
  useEffect(() => {
    if (window.location.pathname === "/login") {
      setNavBg("black");
    } else {
      setNavBg("white");
    }
  }, [location]);

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: navBg,
        color: navBg === "white" ? "black" : "white",
      }}
    >
      <span className="logo">
        {auth.user ? (
          <Link className="link" to="/search">
            DFD.
          </Link>
        ) : (
          <Link className="link" to="/">
            DFD.
          </Link>
        )}
      </span>
      {/* REMEMBER TO ADD THIS BACK WHEN SECURING SEARCH PAGE */}
      {/* <Link className="link" to="search">
        Search <SearchIcon />
      </Link> */}
      {auth.user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={auth.user.photos ? auth.user.photos[0].value : null}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">
            {auth.user.displayName ? auth.user.displayName : auth.user.username}
            <AccountBoxIcon />
          </li>
          <li className="listItem" onClick={logout}>
            Logout <LogoutIcon />
          </li>
        </ul>
      ) : (
        <>
          <Link className="link" to="search">
            Search <SearchIcon />
          </Link>
          <Link className="link" to="login">
            Login <LoginIcon />
          </Link>
        </>
      )}
      <Link className="link" to="about">
        About <InfoIcon />
      </Link>
    </div>
  );
};

export default Navbar;
