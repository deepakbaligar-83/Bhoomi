import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes component from react-router-dom
import App from "./App";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import CommunityForum from "./CommunityForm/CommunityForm";
import User from "./User/TermsAndConditions";
import Box from './CommunityForm/Box';
import Faqs from "./Faqs/Faqs";
import Thank from "./Market/thankyou";
const NoPage = lazy(() => import("./Pages/NoPage"));

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboard/community-forum" element={<CommunityForum/>}/>
      <Route path="/dashboard/terms-and-conditons" element={<User/>}/>
      <Route path="/dashboard/view-info" element={<Box/>}/>
      <Route path="/dashboard/faqs" element={<Faqs/>}/>
      <Route path="/dashboard/checkout" element ={<Thank/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RoutesComponent /> {/* Render the RoutesComponent inside Router */}
    </Router>
  </React.StrictMode>
);
