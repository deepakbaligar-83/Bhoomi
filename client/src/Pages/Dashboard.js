import React, { useState, useEffect, lazy, Suspense } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Climate from '../Climate/Climate';
import News from '../News/News';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import userIcon from '../Assets/male.png';
import ErrorBoundary from './ErrorBoundary';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TodoWrapper from '../Todo/TodoWrapper';
import { Link } from "react-router-dom";
import Connect from '../Assets/connect.png';
import frontImage from '../Assets/front.png';
const TempChart = lazy(() => import('./TempChart'));
const CropInventory = lazy(() => import('../scenes/CropInventory'));
const CropRecommendations = lazy(() => import('../scenes/CropRecommendations'));
const Fertilizer = lazy(() => import('../scenes/Fertilizer'));
const Market = lazy(() => import('../Market/Market'));
const ProductionComparisonChart = lazy(() => import('./ProductionComparisonChart'));

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserProfile, setShowUserProfile] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const viewProfile = () => {
    navigate('/dashboard/terms-and-conditons');
  };

  const feedback = () => {
    navigate('/dashboard/community-forum');
  };

  const faqs = () => {
    navigate('/dashboard/faqs');
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login page
  };

  return (
    <ErrorBoundary>
      <div className="dashboard-container">
        <div className="content">
          {loading ? (
            <div className="loader-container">
              <PulseLoader color="#1b591c" loading={loading} size={20} />
            </div>
          ) : (
            <div>
              <div className="topbar">
                {activeSection === 'dashboard' && (
                  <div className="user-info">
                    <img src={userIcon} alt="User Icon" className="user-photo" />
                    <div className="username">
                      <span className="user-name1">Welcome Back,</span>
                      <span className="user-name">UserName</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className="icondown" onClick={toggleUserProfile} />
                    {showUserProfile && (
                      <div className="user-profile-dropdown">
                        <button className="up1" onClick={viewProfile}>
                          <DescriptionIcon className="icon1" />Terms & Conditions
                        </button>
                        <button className="up2" onClick={feedback}>
                          <QuestionAnswerOutlinedIcon className="icon2" /> Feedback
                        </button>
                        <button className="up3" onClick={faqs}>
                          <LiveHelpIcon className="icon3" /> FAQ's
                        </button>
                        <button className="up4" onClick={logout}>
                          <LogoutIcon className="icon4" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="sidebar">
                <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />
              </div>
              <div className="main-content">
                <Suspense fallback={<div>Loading...</div>}>
                  {activeSection === 'dashboard' && (
                    <>
                      <TempChart className="Tempchart" />
                      <p className='sup1'>Summary of production</p>
                      <ProductionComparisonChart className='ProductionComparisonChart' />
                      <TodoWrapper/>
                      <Link to="/dashboard/community-forum">
                        <img src={Connect} className='connect-img' alt="User Icon" />
                      </Link>
                      <div className="hover-container">
                        <Link to="/dashboard/view-info" className="link-button">
                          <img className='connect-img-box' src={frontImage} alt="Celebrating Agriculture" />
                          <button className="hover-button">Click here</button>
                        </Link>
                      </div>
                    </>
                  )}
                  {activeSection === 'climate' && <Climate />}
                  {activeSection === 'cropInventory' && <CropInventory />}
                  {activeSection === 'croprecommendations' && <CropRecommendations />}
                  {activeSection === 'fertilizer' && <Fertilizer />}
                  {activeSection === 'market' && <Market />}
                  {activeSection === 'news' && <News />}
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
