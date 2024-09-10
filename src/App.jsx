

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"; 
import HomePage from "./components/HomePage.jsx"; 
import AboutUs from "./components/AboutUs.jsx"; 
// import "./index.css";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </div>
    );
};

export default App;
