import React from "react";
import Container from "./Container";
// Mock data simulating the events from your image
const events = [
  // Add your mock events here
  { id: 1, name: "Ruangan Rapat Beta", time: "07:30 - 10:00", day: "Mon" },
  // ... more events
];

const Day = ({ day, dayEvents }) => {
  return (
    <div className="border p-4">
      <div className="font-bold mb-4">{day}</div>
      {dayEvents.map((event) => (
        <Event key={event.id} name={event.name} time={event.time} />
      ))}
    </div>
  );
};

const Event = ({ name, time }) => {
  return (
    <div className="bg-gray-100 border-l-4 border-blue-500 pl-2 mb-2">
      <div className="font-semibold">{name}</div>
      <div className="text-sm">{time}</div>
    </div>
  );
};

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
      <>
      <div className="text-center text-2xl mb-8">Jadwal</div>
      <div className="grid grid-cols-7 ">
        {days.map((day) => (
          <Day
          key={day}
          day={day}
            dayEvents={events.filter((e) => e.day === day)}
            />
            ))}
      </div>
            </>
  );
};

export default Calendar;
