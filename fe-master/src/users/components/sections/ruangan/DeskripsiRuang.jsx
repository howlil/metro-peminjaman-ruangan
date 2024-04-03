import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getDetailRuangan from "@/api/users/beranda/getDetailRuangan";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "../../ui/Container";
import Button from "../../ui/Button"; // Assuming Button component exists

export default function DeskripsiRuang() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [data, setData] = useState(null); // Initialize with null for no data state
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailRuangan(id);
        if (res && res.success) {
          setData(res.data);
        } else {
          console.error("Failed to fetch room details:", res.message);
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      } finally {
        setIsLoading(false); // Update loading state regardless of outcome
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
  }

  if (!data) {
    return <div>Data not found or error fetching data.</div>;
  }

  return (
    <Container>
      <div className="sm:ml-8 mt-8 mb-16 space-y-4">
        <h1 className="text-4xl font-bold">{data.nama_ruangan}</h1>
        <p className="text-custom-500 leading-5">{data.deskripsi}</p>
        <div>
          <h3 className="text-xl font-semibold">Fasilitas:</h3>
          <ul>
            {data.dataFasilitas.map((fasilitas, index) => (
              <li key={index} className="text-custom-500">{fasilitas.nama_fasilitas}</li>
            ))}
          </ul>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-2">
          <Button color="outline" size="small" label="Kontak" />
          <Button color="primary" size="small" label="Peminjaman" />
        </div>
      </div>
    </Container>
  );
}
