import React from "react";
import "./AnatomySection.css";
import anatomy from "../../../assets/anatomy.avif";

const healthIndicators = [
  { label: "Teeth", status: "good", position: { top: "15%", left: "50%" } },
  { label: "Healthy Heart", status: "good", position: { top: "30%", left: "50%" } },
  { label: "Bone", status: "bad", position: { top: "60%", left: "50%" } }
];

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img src={anatomy} alt="Human Body" className="anatomy-image" />
        {healthIndicators.map((item, idx) => (
          <div
            key={idx}
            className={`indicator ${item.status}`}
            style={{ top: item.position.top, left: item.position.left }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
