import React from "react";
import "./ActivityFeed.css";

const barData = [50, 80, 30, 60, 90, 40, 70]; // heights
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <p className="activity-subtext">3 appointments this week</p>

      <div className="bar-chart">
        {barData.map((height, idx) => (
          <div key={idx} className="bar-wrapper">
            <div className="bar" style={{ height: `${height}px` }}></div>
            <span className="day-label">{dayLabels[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
