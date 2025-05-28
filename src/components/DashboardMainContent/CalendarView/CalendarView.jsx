import React from "react";
import "./CalendarView.css";
import { calendarAppointments } from "../../../data/appointments";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarCells = [
  "",
  "",
  "",
  "29",
  "30",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <h3 className="calendar-title">October 2021</h3>

      <div className="calendar-header">
        {daysOfWeek.map((day, index) => (
          <div className="calendar-day-name" key={index}>
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarCells.map((cell, index) => {
          const dateNumber = parseInt(cell);
          const appointment = calendarAppointments.find(
            (a) => a.date === dateNumber
          );

          return (
            <div key={index} className="calendar-cell">
              <div
                className={`cell-date ${appointment ? "date-with-appt" : ""}`}
              >
                {cell}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
