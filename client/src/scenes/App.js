import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"; // Import your Dashboard component
import Sidebar from "./Sidebar"; // Import your Sidebar component
import Climate from "./Climate";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/climate" element={<Climate />} /> 
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
