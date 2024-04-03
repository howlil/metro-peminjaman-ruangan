import React, { useEffect, useState } from "react";
import Container from "../../ui/Container";
import Judul from "../../ui/Judul";
import CardRuangan from "../../ui/CardRuangan";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";
import CircularProgress from "@mui/material/CircularProgress";

export default function PilihRuang() {
  const [ruang, setRuang] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [src, setSrc] = useState([]);

  useEffect(() => {
    const getRuang = async () => {
      setLoading(true);
      const data = await getDataRuanganUser();
      setRuang(data.data);
      setLoading(false);
      
      };
    getRuang();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen"></div>;
  }

  return (
    <Container>
      <div className="  min-h-screen mt-8">
        <Judul judul="Peminjaman" />
        <div className="mb-24">
          <p
            data-aos-duration="2000"
            data-aos-anchor-easing="ease-in-out"
            data-aos="fade-up"
            className="text-xl font-medium mb-3"
          >
            Pilih Ruangan
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {ruang.map((data) => (
              <CardRuangan
                key={data.id_ruangan}
                title={data.nama_ruangan}
                src={src}
                to={`/peminjaman/${data.id_ruangan}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
