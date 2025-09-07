// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      {/* Default buka login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

      {/* Kalau URL nggak ketemu */}
      <Route path="*" element={<h2>Halaman Tidak Ditemukan</h2>} />
    </Routes>
  );
}
