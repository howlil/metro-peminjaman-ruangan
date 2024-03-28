import React from 'react';

const Dropdown = ({ label, placeholder, options }) => {
 
  
  return (
    <div>
      <label htmlFor="building" className="block mt-5 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <select
          id="dropdown"
          name="dropdown"
          className="block w-full rounded-md border-0  px-3 py-2  ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="" disabled selected hidden>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
