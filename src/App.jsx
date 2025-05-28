import React, { useState } from "react";
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent/DashboardMainContent';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="main-content">
        <Header setSidebarOpen={setSidebarOpen} />
        <DashboardMainContent />
      </div>
    </div>
    </>    
  );
};

export default App;

