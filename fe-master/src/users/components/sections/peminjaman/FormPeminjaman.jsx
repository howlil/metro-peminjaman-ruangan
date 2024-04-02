import InputLabel from "../../ui/InputLabel";
import Judul from "../../ui/Judul";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
export default function FormPeminjaman() {
  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="py-12 px-6 sm:px-20 md:px-24 md:py-16"
    >
      <Judul judul="Form Peminjaman Ruangan" />
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel
          label="Nama Peminjam"
          type="text"
          placeholder="ketikan nama"
        />
        <InputLabel label="Jabatan" type="text" placeholder="ketikan jabatan" />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel
          label="Nama Kegiatan"
          type="text"
          placeholder="ketikan nama kegiatan"
        />
        <InputLabel label="kontak" type="text" placeholder="08..." />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel
          label="Tanggal Peminjaman"
          type="date"
          placeholder="ketikan nama kegiatan"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <InputLabel label="Jam Mulai Kegiatan" type="time" />
        <InputLabel label="Jam Selesai Kegiatan" type="time" />
      </div>

      <div className="mb-8">
        <InputLabel label="Upload File Peminjaman" type="file" />
        <p className="ml-4 text-custom-500 mt-2 underline cursor-pointer hover:text-custom-100 transition-all ease-linear duration-100">
          Download disini jika belum ada file peminjaman
        </p>
      </div>
      <Button label="Ajukan Peminjaman" size="small" color="primary" />
    </div>
  );
}
