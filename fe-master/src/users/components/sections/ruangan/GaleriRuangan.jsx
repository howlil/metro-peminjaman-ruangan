import getDetailRuangan from "@/api/users/beranda/getDetailRuangan";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GaleriRuangan() {
  const lokasi = useLocation();
  const url = lokasi.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const [data, setData] = useState([]);
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailRuangan(id);
        if (res && res.success) {
          setData(res.data);
        } else {
          setData(null); // Handle error or no data case
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
        setData(null); // Handle error case
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col gap-y-2 ">
      <div className="aspect-w-16 aspect-h-9 h-1/3">
        <img
          className="object-cover w-full h-full"
          src={`${imgUrl}${data.dataGambar}`}
          alt="gambar"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <img
          className="w-full h-32 bg-center object-cover bg-cover"
          src={`${imgUrl}${data.dataGambar}`}
          alt="gambar"
        />

        <img
          className="w-full h-32 bg-center object-cover bg-cover"
          src={`${imgUrl}${data.dataGambar}`}
          alt="gambar"
        />

        <img
          className="w-full h-32 bg-center object-cover bg-cover"
          src={`${imgUrl}${data.dataGambar}`}
          alt="gambar"
        />
      </div>
      <div className="text-center rounded-md p-4 border-2 grid grid-cols-3">
        <section>
          <p className="text-gray-600">Gedung</p>
          <h1 className="text-xl font-bold">{data.gedung}</h1>
        </section>
        <section className="border-l border-r">
          <p className="text-gray-600">Kapasitas</p>
          <h1 className="text-xl font-bold">{data.kapasitas}</h1>
        </section>
        <section>
          <p className="text-gray-600">Lantai</p>
          <h1 className="text-xl font-bold">{data.lantai}</h1>
        </section>
      </div>
    </div>
  );
}
