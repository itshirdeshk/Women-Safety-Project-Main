import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import IncidentReporting from './pages/IncidentReporting'; 
import Community from './pages/Community'; 
import Chatbot from './pages/Chatbot'; 
// import Forums from './pages/Forums';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Stories from './pages/Stories';
import Signup from './pages/Signup';
import Sosbtn from './components/Sosbtn';
import Profile from './components/Profile';
import RedZone from './pages/RedZone.jsx';
import Modules from './pages/Modules.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Sosbtn />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/incident-reporting" element={<IncidentReporting />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/forums" element={ <Forums />} /> */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/RedZone" element={<RedZone />} />
        <Route path="/Modules" element={<Modules />} />
      </Routes>
    </>
  );
}

export default App;