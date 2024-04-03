import Container from "../../ui/Container";
import Card from "../../ui/Card";
import Judul from "../../ui/Judul";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";
import { useEffect, useState } from "react";

export default function Ruangan() {
  const [ruang, setRuang] = useState([]);
  useEffect(() => {
    const getRuang = async () => {
      const data = await getDataRuanganUser();
      setRuang(data.data);
      console.log("====================================");
      console.log(data.data);
      console.log("====================================");
    };
    getRuang();
  }, []);

  return (
    <>
      <Container>
        <div className="min-h-screen">
          <Judul judul="Ruangan" />
          <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-4">
            {ruang.map((data) => (
              <Card
                key={data.id_ruangan}
                describe={
                  data.deskripsi.slice(0, 130) +
                  (data.deskripsi.length > 100 ? "..." : "")
                }
                image={data.dataGambar.length > 0 ? data.dataGambar[0].file_gambar : ''}
                title={data.nama_ruangan}
                link={data.id_ruangan}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
