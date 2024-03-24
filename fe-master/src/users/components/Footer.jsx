import Container from "./ui/Container";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { navdata } from "../data/NavLink";
export default function Footer() {
  return (
    <div className="bg-custom-300">
      <Container>
        <div className="py-20 flex justify-between items-start border-b-2 border-custom-500">
          <section className=" space-y-6">
            <img src="/public/logo.svg" alt="log" />
            <p className="text-custom-500 leading-5">
              We build readymade websites, mobile <br /> applications, and
              elaborate online <br /> business services.
            </p>
          </section>
          <section className="grid grid-cols-2 gap-4 ">
            {navdata.map((nav, index) => (
              <div key={index} className="min-w">
                <p className="text-custom-500 ml-8 ">{nav.nav}</p>
              </div>
            ))}
          </section>
          <section className=" space-y-4">
            <h1 className="text-lg text-custom-600">info@gmail.com</h1>
            <p className="text-custom-500 leading-5">
              Padang, Sumatera Barat <br />
              Indonesia
            </p>
          </section>
        </div>
        <div className="flex justify-between py-8 items-center">
          <section className="flex gap-4">
            <div className="p-2 bg-neutral-800 rounded-md">
              <Facebook fill="white" color="white" />
            </div>
            <div className="p-2 bg-neutral-800 rounded-md">
              <Twitter fill="white" color="white" />
            </div>
            <div className="p-2 bg-neutral-800 rounded-md">
              <Linkedin fill="white" color="white" />
            </div>
            <div className="p-2 bg-neutral-800 rounded-md">
              <Instagram color="white" />
            </div>
          </section>
          <section className="text-custom-500 ">
            @2024 - Peminjaman Ruangan Rapat
          </section>
        </div>
      </Container>
    </div>
  );
}
