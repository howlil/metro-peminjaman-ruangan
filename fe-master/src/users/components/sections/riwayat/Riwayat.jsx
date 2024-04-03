import React, { useEffect } from "react";
import Container from "../../ui/Container";
import Judul from "../../ui/Judul";
import CardRiwayat from "./CardRiwayat";
import getRiwayat from "@/api/users/riwayat/getRiwayat";

export default function Riwayat() {
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getRiwayat();
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    };
    fetchdata();
  }, []);
  return (
    <Container>
      <Judul judul="Riwayat" />
      <div className="mb-32">
        <CardRiwayat
          name="Ilham Fajar"
          eventType="Pelantikan"
          date="24 Maret 2024"
          location="Ruang Alpha"
          timeRange="07:30 WIB - 10.00 WIB"
          buttonText="Diproses"
        />
      </div>
    </Container>
  );
}
