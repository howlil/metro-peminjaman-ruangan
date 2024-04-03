import React from "react";
import { Calendar, Clock, MapPin, Presentation } from "lucide-react";

// Icon and Text Pair Component
const IconTextPair = ({ Icon, text }) => (
  <div className="flex items-center mb-1">
    <Icon className="h-4 w-4 mr-2" />
    <span>{text}</span>
  </div>
);
function getColorVariant(buttonText) {
  const colorMap = {
    Diproses: "bg-amber-500",
    Ditolak: "bg-red-500",
    Disetujui: "bg-green-500",
    Selesai: "bg-custom-100",
  };

  // Default to some color if buttonText is not found in colorMap
  return colorMap[buttonText] || "bg-gray-800";
}

const CardRiwayat = ({
  name,
  eventType,
  date,
  location,
  timeRange,
  buttonText,
}) => {
  const bgColorClass = getColorVariant(buttonText);

  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="sm:flex sm:justify-between items-center p-4 border-b-2 space-y-4"
    >
      <div>
        <div className="flex  items-center mb-1">
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

      <div
        className={`${bgColorClass} text-white text-center py-2 px-4 rounded`}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default CardRiwayat;
