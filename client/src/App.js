import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import PrivateRoutes from "./context/PrivateRoutes";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <div>
          <Navbar user={user} />
          <Routes>
            {/* GLOBAL ROUTES */}
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            {/* PRIVATE ROUTES */}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
