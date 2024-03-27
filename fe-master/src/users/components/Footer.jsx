import Container from "./ui/Container";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { navdata } from "../data/NavLink";
export default function Footer() {
  return (
    <div className="bg-custom-300">
      <Container>
        <div className="py-20 sm:flex sm:justify-between sm:items-start border-b-2 border-custom-500">
          <section className="mb-8  space-y-6">
            <img src="/public/logo.svg" alt="log" />
            <p className="text-custom-500 leading-5">
              We build readymade websites, mobile <br /> applications, and
              elaborate online <br /> business services.
            </p>
          </section>
          <section className=" mb-8 sm:grid sm:grid-cols-2 sm:gap-y-2 ">
            {navdata.map((nav, index) => (
              <div key={index} className="">
                <p className="text-custom-500  mb-2 sm:mb-0  sm:ml-4 lg:ml-8 ">
                  {nav.nav}
                </p>
              </div>
            ))}
          </section>
          <section className="sm:ml-16 space-y-4">
            <h1 className="text-lg text-custom-600">info@gmail.com</h1>
            <p className="text-custom-500 leading-5">
              Padang, Sumatera Barat <br />
              Indonesia
            </p>
          </section>
        </div>
        <div className="sm:flex sm:justify-between py-8 sm:items-center">
          <section className="flex justify-center gap-4 mb-6 sm:mb-0">
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
          <section className="text-custom-500 text-center ">
            @2024 - Peminjaman Ruangan Rapat
          </section>
        </div>
      </Container>
    </div>
  );
}
