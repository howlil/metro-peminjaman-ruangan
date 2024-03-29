import React from "react";
import { Button } from "@material-tailwind/react";

export function ButtonSimple({ label, onClick, background }) {
  return (
    <div className="flex items-center gap-4">
      <Button
        className={`flex items-center px-10 py-2 text-white ${background}`} 
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}

