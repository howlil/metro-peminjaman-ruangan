import React from "react";
import Judul from "../../ui/Judul";
import { Mail, MapPin, Phone } from "lucide-react";
import AddressCard from "../../ui/AddressCard";
import Container from "../../ui/Container";
import Map from "./Map";

export default function Kontak() {
  return (
    <Container>
      <Judul judul="Kontak" />
      <div className="mb-40">
        <div className="grid grid-cols-3 ">
          {addressCards.map((card, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "border-l-2 border-r-2 border-custom-600" : ""
              } border-blue-200`}
            >
              <AddressCard
                Icon={card.Icon}
                title={card.title}
                address={card.address}
              />
            </div>
          ))}
        </div>
        <div className="my-16">
          <Judul judul="Our Location" />
          <Map />
        </div>
      </div>
    </Container>
  );
}
const addressCards = [
  {
    Icon: MapPin,
    title: "Alamat",
    address: "Jl. Seberang Padang Utara I, Kota Padang",
  },
  {
    Icon: Phone,
    title: "Telepon",
    address: "+62 822-8960-8096",
  },
  {
    Icon: Mail,
    title: "Email",
    address: "peminjamanruang@gmail.com",
  },
];
