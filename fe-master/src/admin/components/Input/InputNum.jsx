import React from "react";

const InputNum = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor="input" className="block mt-5 text-sm font-medium leading-6 text-gray-900">{label}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="inputNum"
            id="inputNum"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={placeholder}
          />
        </div>
    </div>
  );
};

export default InputNum;
