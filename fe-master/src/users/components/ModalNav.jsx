// ModalNav.js
import { X } from "lucide-react";
import ActiveRoute from "./ActiveRoute";
import { navbardata } from "../data/NavLink";

export default function ModalNav({ onClose }) {
  // Menambahkan prop onClose
  return (
    <div className="bg-gray-800 z-20 bg-opacity-75 absolute top-0 left-0 w-full h-full">
      <div
        data-aos-duration="500"
        data-aos-anchor-easing="ease-in-out"
        data-aos="zoom-in"
        className="flex flex-col z-50 bg-white rounded-lg absolute top-4 bottom-4 left-4 right-4"
      >
        <button
          className="p-2 bg-slate-400 bg-opacity-10 absolute rounded-full right-4 top-4"
          onClick={onClose} // Menutup modal ketika diklik
        >
          <X color="black" />{" "}
          {/* Menambahkan warna pada ikon X agar lebih terlihat */}
        </button>
        <nav className="flex flex-col w-full mt-16 p-3">
          {navbardata.map((item, id) => (
            <ActiveRoute key={id} to={item.link}>
              <p className="text-center text-xl">{item.label}</p>
            </ActiveRoute>
          ))}
        </nav>
      </div>
    </div>
  );
}
