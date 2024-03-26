import React from "react";
import Container from "../../ui/Container";
import Judul from "../../ui/Judul";
import CardRiwayat from "./CardRiwayat";

export default function Riwayat() {
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
        <CardRiwayat
          name="Ilham Fajar"
          eventType="Pelantikan"
          date="24 Maret 2024"
          location="Ruang Alpha"
          timeRange="07:30 WIB - 10.00 WIB"
          buttonText="Diproses"
        />
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
