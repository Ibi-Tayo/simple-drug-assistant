import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";

const Navbar = (props) => {
  const auth = useAuth();
  console.log(auth);
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/home">
          Simple drug assistant
        </Link>
      </span>
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
          </li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
