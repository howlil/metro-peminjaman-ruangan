import React, { useEffect, useState } from "react";
import Container from "../../ui/Container";
import Judul from "../../ui/Judul";
import CardRiwayat from "./CardRiwayat";
import getRiwayat from "@/api/users/riwayat/getRiwayat";

export default function Riwayat() {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getRiwayat();
      if (data && data.data) {
        const sortedData = data.data.sort((a, b) => b.tanggal_peminjaman.localeCompare(a.tanggal_peminjaman));
        setRiwayat(sortedData);
      }
    };
    fetchdata();
  }, []);

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(":");
    const hours12 = hours % 12 || 12;
    const ampm = hours < 12 ? "AM" : "PM";
    return `${hours12}:${minutes} ${ampm}`;
  };

  return (
    <div className=" mt-8 min-h-screen">
      <Container>
        <Judul judul="Riwayat" />
        <div className="mb-32">
          {riwayat.map((item, index) => (
            <CardRiwayat
              key={index}
              name={item.nama_peminjam}
              eventType={item.nama_kegiatan}
              date={item.tanggal_peminjaman}
              location={item.dataRuangan.nama_ruangan}
              timeRange={`${formatTime(
                item.jam_mulai_peminjaman
              )} - ${formatTime(item.jam_selesai_peminjaman)}`}
              buttonText={item.status}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
