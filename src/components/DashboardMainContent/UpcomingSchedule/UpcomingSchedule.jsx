import React from "react";
import "./UpcomingSchedule.css";
import { upcomingSchedule } from "../../../data/appointments";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-section">
      <h3>The Upcoming Schedule</h3>

      {upcomingSchedule.map((dayBlock, idx) => (
        <div key={idx} className="schedule-day">
          <h4>{dayBlock.day}</h4>

          {/* 2-column layout here */}
          <div className="schedule-grid">
            {dayBlock.appointments.map((appt, i) => (
              <SimpleAppointmentCard
                key={i}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
