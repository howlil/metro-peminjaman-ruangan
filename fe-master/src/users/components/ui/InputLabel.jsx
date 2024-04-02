import React from "react";

export default function InputLabel(props) {
  const { label,onChange,value, type, placeholder } = props;
  return (
    <div className="flex flex-col justify-start">
      <label className="text-sm font-semibold mb-1">{label}</label>
      <input
         value={value}
        onChange={onChange}
        className="w-full border-2 px-2 py-1 rounded-md "
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
