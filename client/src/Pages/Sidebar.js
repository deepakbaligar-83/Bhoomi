import React, { useState } from "react";
// import { Icon } from '@iconify/react';
import GridViewIcon from '@mui/icons-material/GridView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faNewspaper, faWarehouse, faSeedling, faFlask, faStore } from '@fortawesome/free-solid-svg-icons';
import DONATE from '../Assets/donate.jpg';
import { useNavigate } from 'react-router-dom'; 
import { MdLogout } from "react-icons/md";
import "./Sidebar.css";

function Sidebar({ activeSection, handleSectionChange }) {

    const [activeLogout, setActiveLogout] = useState(false);
    const navigate = useNavigate(); 
    const logout = () => {
        localStorage.clear();
        navigate("/login"); // Redirect to login page
      };
    ;

    return (
        <div className="sidebar">
            <ul>
                <p className="p1">Home</p>
                <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => handleSectionChange('dashboard')}>
     
                <GridViewIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="p2">Services</p>
                <li className={activeSection === 'climate' ? 'active' : ''} onClick={() => handleSectionChange('climate')}>
                    < FontAwesomeIcon icon={faCloud} className="icon " />
                    <span>Climate</span>
                </li>
                <li className={activeSection === 'cropInventory' ? 'active' : ''} onClick={() => handleSectionChange('cropInventory')}>
                    <FontAwesomeIcon icon={faWarehouse} className="icon" />
                    <span>Crop Inventory</span>
                </li>
                <li className={activeSection === 'croprecommendations' ? 'active' : ''} onClick={() => handleSectionChange('croprecommendations')}>
                    <FontAwesomeIcon icon={faSeedling} className="icon" />
                    <span>Crop Recommendations</span>
                </li>
                <li className={activeSection === 'fertilizer' ? 'active' : ''} onClick={() => handleSectionChange('fertilizer')}>
                    <FontAwesomeIcon icon={faFlask} className="icon" />
                    <span>Fertilizer Recommendations</span>
                </li>
                <li className={activeSection === 'market' ? 'active' : ''} onClick={() => handleSectionChange('market')}>
                    <FontAwesomeIcon icon={faStore} className="icon" />
                    <span>Market</span>
                </li>
                <li className={activeSection === 'news' ? 'active' : ''} onClick={() => handleSectionChange('news')}>
                    <FontAwesomeIcon icon={faNewspaper} className="icon" />
                    <span>News</span>
                </li>
            </ul>
            {/* <hr className="divider1" /> */}
            <div>
                <a href="https://grandmaratha.org/" target="_blank" rel="noopener noreferrer">
                    <img className="donate" src={DONATE} alt="file" />
                </a>
            </div>
            <hr className="divider" />
            <div className={`logout-container ${activeLogout ? 'active' : ''}`} onClick={() => { setActiveLogout(true); logout(); }}>
                <MdLogout className="logout-icon" />
                <button className="logout-button">Logout</button>
            </div>
        </div>
    );
}

export default Sidebar;
