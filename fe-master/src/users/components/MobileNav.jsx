// MobileNav.js
import { Menu } from "lucide-react";
import ModalNav from "./ModalNav";
import React, { useState } from "react"; // Pastikan untuk mengimpor useState

export default function MobileNav() {
  const [showModal, setShowModal] = useState(false); // State untuk menampilkan atau menyembunyikan modal

  return (
    <div>
      <button onClick={() => setShowModal(true)}> {/* Menampilkan modal ketika tombol diklik */}
        <Menu size={32} color="black" /> {/* Menambahkan warna pada ikon Menu agar lebih terlihat */}
      </button>
      {showModal && <ModalNav onClose={() => setShowModal(false)} />} {/* Menampilkan ModalNav jika showModal true */}
    </div>
  );
}
