// ModalNav.js
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import ActiveRoute from "./ActiveRoute";
import { navbardata } from "../data/NavLink";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";
import { useNavigate } from "react-router-dom"; // Corrected import
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ModalNav({ onClose }) {
  const [ruanganData, setRuanganData] = useState([]);
  useEffect(() => {
    const fetchRuanganData = async () => {
      const res = await getDataRuanganUser();
      if (res && res.data) {
        setRuanganData(res.data);
      }
    };
    fetchRuanganData();
  }, []);

  return (
    <div className="bg-gray-800 fixed inset-0 z-20 bg-opacity-75   w-full h-full">
      <div
        data-aos-duration="500"
        data-aos-anchor-easing="ease-in-out"
        data-aos="zoom-in"
        className="flex flex-col z-50 bg-white rounded-lg absolute top-4 bottom-4 left-4 right-4"
      >
        <button
          className="p-2 bg-slate-400 bg-opacity-10 absolute rounded-full right-4 top-4"
          onClick={onClose}
        >
          <X color="black" />
        </button>
        <nav className="flex flex-col w-full mt-16 p-3">
          {navbardata.map((item, id) =>
            item.label.toLowerCase() === "ruangan" ? (
              <Dropdown key={id} title="Ruangan" onClose={onClose} items={ruanganData} />
            ) : (
              <ActiveRoute key={id} to={item.link}>
                <p className="text-center text-xl">{item.label}</p>
              </ActiveRoute>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

const Dropdown = ({ title, items, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setIsOpen(false); 
    navigate(`/ruangan/${item.id_ruangan}`);
    onClose();
  };

  return (
    <div className="my-2">
      <div
        className="flex justify-center items-end gap-3 ml-6 p-4 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xl">{title}</p>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {items.map((item, index) => (
            <p
              key={index}
              onClick={() => handleItemClick(item)}
              className="p-2 hover:bg-custom-100 transition-all text-xl ease-linear duration-300 hover:text-white text-center"
            >
              {item.nama_ruangan}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
