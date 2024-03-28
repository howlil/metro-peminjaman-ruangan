import React from "react";

const TextArea = ({ label, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor="label" className="block mt-5 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
          <textarea
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
    </div>
  );
};

export default TextArea;
