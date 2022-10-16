import Navbar from "./components/Navbar";
import "./app.css";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import About from "./pages/About";
import Info from "./pages/Info";
import Home from "./pages/Home";

const App = ({ hideLoader }) => {
  useEffect(hideLoader, [hideLoader]);
  const auth = useAuth();

  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
        <Routes>
          {/* GLOBAL ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* PRIVATE ROUTES: change back to auth.user once ready to properly secure routes, i need to easily see these routes without auth for now */}
          <Route path="/search" element={auth ? <Search /> : null} />
          <Route path="/info" element={auth ? <Info /> : null} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
