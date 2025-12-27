import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from "./calculator";
import About from "./about";
import './main.css';

/* ---------------- Bubble Background ---------------- */
function BubbleBackground() {
  const bubbles = Array.from({ length: 20 }); // jumlah gelembung
  return (
    <>
      {bubbles.map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 30}px`,
            height: `${10 + Math.random() * 30}px`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </>
  );
}

/* ---------------- Main Render ---------------- */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BubbleBackground /> {/* Tambahkan background animasi */}
      
      <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient">
        <div className="container">
          <Link className="navbar-brand" to="/">Calculator</Link>
          <div>
            <Link className="btn btn-outline-light me-2" to="/">Home</Link>
            <Link className="btn btn-outline-light" to="/about">About</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
