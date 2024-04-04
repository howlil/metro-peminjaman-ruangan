import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const AccordionItem = ({ number, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        data-aos-duration="1500"
        data-aos-anchor-easing="ease-in-out"
        data-aos="fade-up"
        className="border-2 border-gray-500 rounded-md"
      >
        <div
          className="flex justify-between items-center p-4 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <div className="bg-custom-100 text-white rounded-md w-8 h-8 flex items-center justify-center mr-3">
              {number}
            </div>
            <p className="text-custom-600">{label}</p>
          </div>
          <div>{isOpen ? <ChevronUp color="white" /> : <ChevronDown color="white" />}</div>
        </div>
      </div>
      {isOpen && (
        <div
          data-aos-duration="1500"
          data-aos-anchor-easing="ease-in-out"
          data-aos="fade-right"
          className="py-8 ml-8 border-l border-dashed border-custom-100 px-8"
        >
          <div className="bg-custom-500 p-4 rounded">{children}</div>
        </div>
      )}
    </>
  );
};

export default function Accordion() {
  return (
    <div className="w-full flex flex-col gap-4 rounded-lg">
      <AccordionItem number="1" label="Mengakses Platform Peminjaman">
        <p>Untuk melakukan peminjaman ruangan, pertama-tama akses platform peminjaman ruangan melalui website resmi atau aplikasi yang telah disediakan oleh penyelenggara.</p>
      </AccordionItem>
      <AccordionItem number="2" label="Melihat Ketersediaan Ruangan">
        <p>Setelah masuk ke platform, Anda dapat melihat ketersediaan ruangan beserta detail fasilitas yang tersedia. Pilih ruangan yang sesuai dengan kebutuhan acara atau kegiatan Anda.</p>
      </AccordionItem>
      <AccordionItem number="3" label="Mengisi Formulir Peminjaman">
        <p>Setelah menemukan ruangan yang diinginkan, lanjutkan dengan mengisi formulir peminjaman. Isi data diri dan informasi kegiatan secara lengkap dan akurat.</p>
      </AccordionItem>
      <AccordionItem number="4" label="Menunggu Konfirmasi">
        <p>Setelah mengirimkan formulir peminjaman, tunggu konfirmasi dari admin atau pihak penyelenggara. Anda akan menerima notifikasi melalui email atau notifikasi pada platform.</p>
      </AccordionItem>
      <AccordionItem number="5" label="Melakukan Pembayaran (jika diperlukan)">
        <p>Beberapa ruangan mungkin memerlukan pembayaran untuk bisa dipinjam. Jika ruangan yang Anda pilih memerlukan pembayaran, lakukan pembayaran sesuai dengan instruksi yang diberikan.</p>
      </AccordionItem>
      <AccordionItem number="6" label="Menerima Akses Ruangan">
        <p>Setelah konfirmasi dan pembayaran (jika diperlukan) selesai, Anda akan menerima akses untuk menggunakan ruangan. Pastikan untuk mematuhi aturan penggunaan ruangan yang telah ditetapkan.</p>
      </AccordionItem>
    </div>
  );
}
