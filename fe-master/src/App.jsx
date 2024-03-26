import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BerandaPage from "@/users/pages/beranda";
import NotFound from "./NotFound";
import JadwalPage from "./users/pages/jadwal";
import RuanganPage from "./users/pages/ruangan";
import RiwayatPage from "./users/pages/riwayat";
import PeminjamanPage from "./users/pages/peminjaman";
import KontakPage from "./users/pages/kontak";
import CheckRuang from "./users/components/sections/peminjaman/CheckRuang";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/beranda" element={<BerandaPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/ruangan" element={<RuanganPage />} />
          <Route path="/riwayat" element={<RiwayatPage />} />
          <Route path="/peminjaman" element={<PeminjamanPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/peminjaman/checkruang" element={<CheckRuang />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
