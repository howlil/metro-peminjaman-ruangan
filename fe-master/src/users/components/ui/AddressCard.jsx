import React from "react";

const AddressCard = ({ Icon, title, address }) => {
  return (
    <div className="p-4  border-blue-200  flex flex-col items-center justify-center">
      <div className="bg-custom-100 rounded-full p-6 inline-flex items-center justify-center">
        <Icon color="white" size={32} />
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-neutral-400">{address}</p>
    </div>
  );
};

export default AddressCard;
