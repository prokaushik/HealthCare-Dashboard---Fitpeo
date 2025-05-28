import React from "react";
import "./HealthStatusCards.css";
import { healthStatusCards } from "../../../data/healthData";

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthStatusCards.map((card, idx) => (
        <div className="card" key={idx}>
          <h4>{card.title}</h4>
          <p className="date">{card.date}</p>
          <p className="status" style={{ color: card.color }}>
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
