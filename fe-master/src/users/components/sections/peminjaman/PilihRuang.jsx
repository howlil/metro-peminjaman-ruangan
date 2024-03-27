import React from "react";
import Container from "../../ui/Container";
import Judul from "../../ui/Judul";
import CardRuangan from "../../ui/CardRuangan";

export default function PilihRuang() {
  return (
    <Container>
      <div className=" py-4 md:py-16">
        <Judul judul="Peminjaman" />
        <div className="mb-24">
          <p className="text-xl font-medium mb-3">Pilih Ruangan</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <CardRuangan
              title="Ruang Rapat Alpha"
              src="/public/img.jpg"
              to="/peminjaman/checkruang"
            />
            <CardRuangan
              title="Ruang Rapat Alpha"
              src="/public/img.jpg"
              to="/peminjaman/checkruang"
            />
            <CardRuangan
              title="Ruang Rapat Alpha"
              src="/public/img.jpg"
              to="/peminjaman/checkruang"
            />
            <CardRuangan
              title="Ruang Rapat Alpha"
              src="/public/img.jpg"
              to="/peminjaman/checkruang"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
