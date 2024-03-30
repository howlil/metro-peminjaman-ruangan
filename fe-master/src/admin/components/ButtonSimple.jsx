import React from "react";
import { Button } from "@material-tailwind/react";

export function ButtonSimple({ label, onClick, background, type }) {
  return (
    <div className="flex items-center gap-4">
      <Button
        type={type}
        className={`flex items-center text-center px-10 py-2 text-white ${background}`} 
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}

