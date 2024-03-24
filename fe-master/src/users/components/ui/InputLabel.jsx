import React from "react";

export default function InputLabel(props) {
  const { label, type, placeholder } = props;
  return (
    <div className="flex flex-col justify-start">
      <label className="text-lg font-semibold">{label}</label>
      <input
        className="w-full border-2 px-2 py-1 rounded-md"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
