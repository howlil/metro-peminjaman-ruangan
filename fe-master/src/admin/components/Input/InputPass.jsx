import React, { useState } from "react";

const InputPass = ({name, label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label htmlFor="input" className="block mt-5 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src="/hide-pass.svg" alt="Hide Password" className="h-5 w-5" />
          ) : (
            <img src="/show-pass.svg" alt="Show Password" className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputPass;
