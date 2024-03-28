import React from "react";
import { Button } from "@material-tailwind/react";

export function ButtonRound({ label, onClick, background }) {
  return (
    <div>
      <Button
        className={`rounded-full text-xs px-4 py-2 shadow-none ${background}`} 
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
