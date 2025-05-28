import React from "react";
import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
