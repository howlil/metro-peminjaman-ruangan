import { CheckCheck, X } from "lucide-react";
import Button from "./Button";
export default function Alert({ onClose,onDirect }) {
  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white z-10 relative p-12 shadow rounded-md">
        <div className="flex items-center justify-center flex-col gap-6">
          <p className="p-3 rounded-full  bg-custom-100">
            <CheckCheck size={32} color="white" />
          </p>
          <h1 className="text-center leading-5 text-custom-300 font-semibold text-xl ">
            Ruangan telah diajukan <br />
            untuk peminjaman
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={onClose}
            label="kembali" color="outline" size="small" />
            <Button 
              onClick={onDirect}
            label="Lihat Riwayat" color="primary" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
