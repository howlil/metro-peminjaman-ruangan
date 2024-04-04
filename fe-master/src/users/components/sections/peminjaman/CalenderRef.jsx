import Button from "../../ui/Button";
import CalendarInfo from "./CalenderInfo";
import { Circle } from "lucide-react";
export default function CalenderRef({ onClick }) {
  return (
    <div
      data-aos-duration="1500"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-left"
      className="mx-6 my-12 sm:mx-16 lg:pr-16"
    >
      <>
        <CalendarInfo />
      </>
      <div className="my-8">
        <h1 className="font-semibold text-xl">
          Keterangan Ruangan yang diajuakan
        </h1>
        <div className="items-center flex gap-3 mb-3">
          <Circle size={20} fill="#574FF0" color="#574FF0" />
          <p>Ruangan sudah disetujui peminjaman</p>
        </div>
        <div className="items-center flex gap-3">
          <Circle size={20} fill="#262830" color="#262830" />
          <p>Ruangan sedang diproses peminjaman</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 my-8">
        <Button
          onClick={onClick}
          label="Ajukan peminjaman"
          color="primary"
          size="small"
        />
      </div>
    </div>
  );
}
