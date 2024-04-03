import getDetailRuangan from "@/api/users/beranda/getDetailRuangan";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
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
export default function CheckCard() {
  const [detailRuangan, setDetailRuangan] = useState([]);
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/`;
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetch starts
      const res = await getDetailRuangan(id);
      if (res && res.success) {
        setDetailRuangan(res.data);
        console.log(res.data);
      }
      setIsLoading(false); // Set loading to false when fetch completes [setIsLoading] x
    };
    fetchData();
  }, [id]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress /> {/* Display loading spinner */}
      </div>
    );
  }

  // Ensure detailRuangan is defined before trying to render its properties
  if (!detailRuangan) {
    return <div>Data not found</div>;
  }

  return (
    <div className="bg-custom-300 w-full h-full">
      <div
        data-aos-duration="2000"
        data-aos-anchor-easing="ease-in-out"
        data-aos="fade-right"
        className="p-6 sm:p-20 md:pl-24 md:pr-4 md:pt-12"
      >
        <h1 className="text-white text-3xl font-bold mb-3">
          {detailRuangan.nama_ruangan}
        </h1>
        <p className="leading-5 font-normal text-md text-custom-500">
          {detailRuangan.deskripsi}
        </p>
        <div className="my-4">
          <h3 className="text-xl text-custom-600 mb-3">Fasilitas:</h3>
          <ul
            className={`${
              detailRuangan.dataFasilitas.length > 4
                ? "flex justify-between flex-wrap gap-2"
                : ""
            }`}
          >
            {detailRuangan.dataFasilitas.map((fasilitas, index) => (
              <li
                key={index}
                className="text-sm flex gap-3 mb-2 text-custom-500"
              >
                {facilityIcons[fasilitas.nama_fasilitas]}
                {fasilitas.nama_fasilitas}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-8">
          {detailRuangan.dataGambar && detailRuangan.dataGambar.length > 0 && (
            <div className="aspect-w-16 aspect-h-9 h-1/3">
              <img
                className="object-cover w-full h-full"
                src={`${imgUrl}${detailRuangan.dataGambar[1].file_gambar}`}
                alt="Room"
              />
            </div>
          )}
          <div className="text-center rounded-bl-md rounded-br-md p-4 bg-slate-500 grid grid-cols-3">
            <section>
              <p className="text-gray-800">Gedung</p>
              <h1 className="text-xl font-bold">{detailRuangan.gedung}</h1>
            </section>
            <section className="border-l border-r border-custom-500">
              <p className="text-gray-800">Lantai</p>
              <h1 className="text-xl font-bold">{detailRuangan.lantai}</h1>
            </section>
            <section>
              <p className="text-gray-800">Kapasitas</p>
              <h1 className="text-xl font-bold">{detailRuangan.kapasitas}</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
