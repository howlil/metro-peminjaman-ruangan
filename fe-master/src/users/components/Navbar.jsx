import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MobileNav from "./MobileNav";
export default function Navbar() {
    
  return (
    <div className="flex justify-between items-center py-8">
      <img src="/public/logo.svg" alt="" />
      <div className="sm:hidden">
        <MobileNav /> 
      </div>
      <nav className=" hidden sm:flex gap-8">
        <Link>Beranda</Link>
        <Link className="flex items-center gap-2">
          Ruangan
          <ChevronDown size={16} />
        </Link>
        <Link>Jadwal</Link>
        <Link>Peminjaman</Link>
        <Link>Riwayat</Link>
        <Link>Kontak</Link>
      </nav>
    </div>
  );
}
