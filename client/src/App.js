import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

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
          {/* PRIVATE ROUTES */}
          <Route path="/home" element={auth.user ? <Home /> : null} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
