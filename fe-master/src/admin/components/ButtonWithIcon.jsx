import React from "react";
import { Button } from "@material-tailwind/react";

export function ButtonWithIcon({ type, label, icon, onClick, background }) {
  return (
    <div className="flex items-center gap-4">
      <Button
        className={`flex items-center gap-3 ${background}`} 
        onClick={onClick}
        type={type}
      >
        <img src={icon} alt="icon" />
        {label}
      </Button>
    </div>
  );
}

