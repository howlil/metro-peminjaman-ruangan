import React from "react";
import { Calendar, Clock, MapPin, Presentation } from "lucide-react";

// Icon and Text Pair Component
const IconTextPair = ({ Icon, text }) => (
  <div className="flex items-center mb-1">
    <Icon className="h-4 w-4 mr-2" />
    <span>{text}</span>
  </div>
);

const CardRiwayat = ({ name, eventType, date, location, timeRange, buttonText }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2">
      <div>
        <div className="flex items-center mb-1">
          <p className="font-semibold text-lg">{name}</p>
        </div>
        <div className="flex gap-8 items-end">
          <section>
            <IconTextPair Icon={Presentation} text={eventType} />
            <IconTextPair Icon={Calendar} text={date} />
          </section>
          <section>
            <IconTextPair Icon={MapPin} text={location} />
            <IconTextPair Icon={Clock} text={timeRange} />
          </section>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-2 px-4 rounded">
        {buttonText}
      </div>
    </div>
  );
};

export default CardRiwayat;
