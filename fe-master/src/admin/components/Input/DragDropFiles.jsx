import React, { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleCancel = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div>
        <label htmlFor="building" className="block mt-5 mb-2 text-sm font-medium leading-6 text-gray-900">
        Upload Gambar
        </label>
        <div className="flex">
            <div
                className="flex flex-col items-center justify-center mr-4 p-0 relative"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{ width: "300px", height: "300px" }}
            >
                <img
                src="/dragndrop.svg"
                alt="Drag and Drop"
                className="cursor-pointer"
                onClick={handleImageClick}
                />
                <input
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
                accept="image/png, image/jpeg"
                ref={inputRef}
                />
            </div>

            {/* Preview Area */}
            <div className="flex flex-col">
                {files.map((file, index) => (
                <div key={index} className="flex">
                    <img src="/file.svg" alt="File Icon" className="w-6 h-6 mr-2" />
                    <div className="file-info flex justify-between">
                    <span>{file.name}</span>
                    <button type="button" onClick={() => handleCancel(index)} className="ml-2 font-medium text-black font-bold py-1 px-2">
                        <img src="/cancel.svg" alt="cancel" />
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default DragDropFiles;
