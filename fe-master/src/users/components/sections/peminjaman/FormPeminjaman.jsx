import InputLabel from "../../ui/InputLabel";
import Judul from "../../ui/Judul";
import Button from "../../ui/Button";
export default function FormPeminjaman() {
  return (
    <div className="my-24">
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
