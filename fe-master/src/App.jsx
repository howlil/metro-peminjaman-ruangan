import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BerandaPage from "@/users/pages/beranda";
import NotFound from "./NotFound";
import JadwalPage from "./users/pages/jadwal";
import RuanganPage from "./users/pages/ruangan";
import RiwayatPage from "./users/pages/riwayat";
import PeminjamanPage from "./users/pages/peminjaman";
import KontakPage from "./users/pages/kontak";
import LayoutRuang from "./users/components/sections/peminjaman/LayoutRuang";

import LoginPage from "./admin/pages/login";
import DashboardPage from "./admin/pages/dashboard";
import PengajuanPage from "./admin/pages/kelolaPengajuan";
import KelolaKonfirmasiPage from "./admin/pages/kelolaKonfirmasi";
import KelolaRuanganPage from "./admin/pages/kelolaRuangan";
import TambahRuanganPage from "./admin/pages/tambahRuangan";
import KelolaCaraPage from "./admin/pages/kelolaCara";
import KelolaRiwayatPage from "./admin/pages/kelolaRiwayat";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/ruangan/:id_ruang" element={<RuanganPage />} />
          <Route path="/riwayat" element={<RiwayatPage />} />
          <Route path="/peminjaman" element={<PeminjamanPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/peminjaman/:id_ruang" element={<LayoutRuang />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/pengajuan" element={<PengajuanPage />} />
          <Route path="/admin/konfirmasi" element={<KelolaKonfirmasiPage />} />
          <Route path="/admin/ruangan" element={<KelolaRuanganPage />} />
          <Route path="/admin/ruangan/tambah" element={<TambahRuanganPage />} />
          <Route path="/admin/cara" element={<KelolaCaraPage />} />
          <Route path="/admin/riwayat" element={<KelolaRiwayatPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
