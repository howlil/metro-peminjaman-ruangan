import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MobileNav from "./MobileNav";
import Container from "./ui/Container";
export default function Navbar() {
  return (
      <Container>
        <div className="flex  justify-between items-center py-8">
          <img src="/public/logo.svg" alt="" />
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
      </Container>
  );
}
