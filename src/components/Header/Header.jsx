import React from "react";
import "./Header.css";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          readOnly
        />
        <div className="notification">🔔</div>

      </div>

      <div className="right-section">        
        <div className="profile">
          <img src={avatar} alt="User Avatar" className="avatar" />          
        </div>
        <button className="add-btn">+</button>
      </div>
    </header>
  );
};

export default Header;
