import React, { useRef, useState } from "react";

const InputFile = ({ label, onChange, placeholder }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const selectedFileName = fileList[0].name; 
    onChange(fileList);
    setFileName(selectedFileName);
  };

  return (
    <div className="mb-4">
      <label htmlFor="file" className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="relative mt-1">
        <input
          type="file"
          id="file"
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          ref={inputRef}
          onChange={handleFileChange}
          accept=".pdf" 
        />
        <input
          className={`pr-12 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            fileName ? 'text-black' : 'text-gray-400'
          }`} 
          placeholder={placeholder} 
          value={fileName}
          readOnly
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-md text-gray-800 font-medium focus:outline-none focus:bg-gray-300"
          onClick={handleButtonClick}
        >
          Choose File
        </button>
      </div>
    </div>
  );
};

export default InputFile;
