import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getDetailRuangan from "@/api/users/beranda/getDetailRuangan";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import DetailPop from "../../ui/DetailPop"; // Assuming DetailPop component exists
import {
  Wifi,
  Coffee,
  AirVent,
  Projector,
  Popcorn,
  Fan,
  Armchair,
  BetweenVerticalEnd,
} from "lucide-react";

const facilityIcons = {
  WIFI: <Wifi size={20} />,
  AC: <AirVent size={20} />,
  Projector: <Projector size={20} />,
  Snack: <Popcorn size={20} />,
  Meja: <BetweenVerticalEnd size={20} />,
  Kursi: <Armchair size={20} />,
  Dispenser: <Coffee size={20} />,
  " Kipas Angin": <Fan size={20} />,
};

export default function DeskripsiRuang() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/").pop();
  const [data, setData] = useState(null); // Initialize with null for no data state
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/`;
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Ensure to set loading to true here
      try {
        const res = await getDetailRuangan(id);
        if (res && res.success) {
          setData(res.data);
          console.log(res.data);
        } else {
          console.error("Failed to fetch room details:", res.message);
          setData(null); // Handle error or no data case
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
        setData(null); // Handle error case
      } finally {
        setIsLoading(false); // Update loading state regardless of outcome
      }
    };
    fetchData();
  }, [id]);

  // Display loading indicator while fetching data
  if (isLoading) {
    return (
      <Container>
        <div className="hidden">
          <CircularProgress />
        </div>
      </Container>
    );
  }

  // Display message when no data is found
  if (!data) {
    return (
      <Container>
        <div>Data not found or error fetching data.</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="sm:ml-8 mt-8 mb-16 space-y-4">
        <h1 className="text-4xl font-bold">{data.nama_ruangan}</h1>
        <p className="text-custom-500 leading-5">{data.deskripsi}</p>
        <div>
          <h3 className="text-xl font-semibold mb-3">Fasilitas:</h3>
          <ul
            className={`${
              data.dataFasilitas.length > 4 ? "grid grid-cols-2 gap-2" : ""
            }`}
          >
            {data.dataFasilitas.map((fasilitas, index) => (
              <li
                key={index}
                className="text-sm flex gap-3 mb-2 text-custom-400"
              >
                {facilityIcons[fasilitas.nama_fasilitas]}
                {fasilitas.nama_fasilitas}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-2">
          <Button
            onClick={() => setOpenModal(true)}
            color="outline"
            size="small"
            label="Kontak"
          />
          <Button
            onClick={() => navigate(`/peminjaman/${data.id_ruangan}`)}
            color="primary"
            size="small"
            label="Peminjaman"
          />
        </div>
        {openModal && (
          <DetailPop
            penanggungJawab={data.penanggung_jawab}
            namaRuang={data.nama_ruangan}
            onClick={() => setOpenModal(false)}
          />
        )}
      </div>
    </Container>
  );
}
