import InputLabel from "../../ui/InputLabel";
import Judul from "../../ui/Judul";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
export default function FormPeminjaman() {
  return (
    <div className="py-12 px-6 sm:px-20 md:px-24 md:py-16">
      <Judul judul="Form Peminjaman Ruangan" />
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel label="Nama Peminjam" type="text" />
        <InputLabel label="Nama Peminjam" type="text" />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel label="Nama Peminjam" type="text" />
        <InputLabel label="Nama Peminjam" type="text" />
      </div>
      <div className="grid mb-8 grid-cols-2 gap-2">
        <InputLabel label="Nama Peminjam" type="text" />
      </div>
      <div className="grid mb-8 grid-cols-2 gap-2">
        <InputLabel label="Nama Peminjam" type="text" />
        <InputLabel label="Nama Peminjam" type="text" />
      </div>
      <div>
        <InputLabel label="Nama Peminjam" type="text" />
        <p>Download disini jika belum ada file peminjaman</p>
      </div>
      <Button label="Ajukan Peminjaman" size="small" color="primary" />
    </div>
  );
}
