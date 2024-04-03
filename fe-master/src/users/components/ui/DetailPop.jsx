import React from "react";
import { UserRound, X } from "lucide-react";

export default function DetailPop({ onClick, penanggungJawab, namaRuang }) {
  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/4 z-10 relative p-12 shadow rounded-md">
        <div
          onClick={onClick} // Now this onClick will work
          className="absolute top-4 right-4 p-1 rounded-full bg-slate-100 cursor-pointer" // Added cursor-pointer for better UX
        >
          <X size={24} />
        </div>
        <h1 className="text-2xl font-semibold">{namaRuang}</h1>
        <div>
          <p className="text-md text-custom-400">Penanggung Jawab:</p>
          <span className="flex gap-2 items-center">
            <UserRound size={20} fill="black" />
            <p className="text-custom-500">{penanggungJawab}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
