import React from "react";
import "./Sidebar.css";
import { sidebarLinks } from "../../data/navigation";
import * as Icons from "lucide-react";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
    <h2>Health<span>Care</span></h2>
      {sidebarLinks.map((section, sIdx) => (
        <div key={sIdx} className="sidebar-section">
          <p className="section-title">{section.section}</p>
          {section.links.map((item, idx) => {
            const Icon = Icons[item.icon] || Icons.Circle;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                to={item.path}
                key={idx}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                <Icon size={18} className="icon" />
                <>{item.label}</>
              </NavLink>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
