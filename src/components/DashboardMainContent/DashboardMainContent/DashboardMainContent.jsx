import React from "react";
import "./DashboardMainContent.css";

import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-layout">
      {/* Row 1 */}
      <div className="box anatomy"><AnatomySection /></div>
      <div className="box health"><HealthStatusCards /></div>
      <div className="box calendar"><CalendarView /></div>

      {/* Row 2 */}
      <div className="box activity"><ActivityFeed /></div>
      <div className="box schedule"><UpcomingSchedule /></div>
    </div>
  );
};

export default DashboardMainContent;
