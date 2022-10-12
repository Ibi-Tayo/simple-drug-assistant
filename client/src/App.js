import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import About from "./pages/About";
import Info from "./pages/Info";

const App = ({ hideLoader }) => {
  useEffect(hideLoader, [hideLoader]);
  const auth = useAuth();

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* GLOBAL ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* PRIVATE ROUTES: change back to auth.user once ready to properly secure routes, i need to easily see these routes without auth for now */}
          <Route path="/home" element={auth ? <Home /> : null} />
          <Route path="/info" element={auth ? <Info /> : null} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
