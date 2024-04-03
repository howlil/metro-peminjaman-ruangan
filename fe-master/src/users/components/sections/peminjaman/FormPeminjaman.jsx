import InputLabel from "../../ui/InputLabel";
import Judul from "../../ui/Judul";
import Button from "../../ui/Button";
import tambahPeminjaman from "@/api/users/peminjaman/tambahPeminjaman";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputFile from "../../ui/InputFile";
import Alert from "../../ui/Alert";
import getDataCaraPeminjaman from "@/api/users/beranda/getDataCaraPeminjaman";

export default function FormPeminjaman() {
  const [namaPeminjam, setNamaPeminjam] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [namaKegiatan, setKegiatan] = useState("");
  const [kontak, setKontak] = useState("");
  const [tglPeminjaman, setTglPeminjaman] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [file, setFile] = useState(null);
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const id = url.substring(url.lastIndexOf("/") + 1);
  const [openModal, setModal] = useState(false);
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/filePengajuan/`;
  console.log("====================================");
  console.log(apiUrl);
  console.log("====================================");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await tambahPeminjaman(
        id,
        namaPeminjam,
        jabatan,
        namaKegiatan,
        kontak,
        tglPeminjaman,
        jamMulai,
        jamSelesai,
        file
      );
      console.log(response);
      setModal(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDataCaraPeminjaman();
        setData(res.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const resetFormFields = () => {
    setNamaPeminjam("");
    setJabatan("");
    setKegiatan("");
    setKontak("");
    setTglPeminjaman("");
    setJamMulai("");
    setJamSelesai("");
    setFile("");
  };

  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="py-12 px-6 sm:px-20 md:px-24 md:py-16"
    >
      <Judul judul="Form Peminjaman Ruangan" />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <InputLabel
            label="Nama Peminjam"
            type="text"
            value={namaPeminjam}
            placeholder="ketikan nama"
            onChange={(e) => setNamaPeminjam(e.target.value)}
          />

          <InputLabel
            label="Jabatan"
            type="text"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            placeholder="ketikan jabatan"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-8">
          <InputLabel
            label="Nama Kegiatan"
            type="text"
            value={namaKegiatan}
            onChange={(e) => setKegiatan(e.target.value)}
            placeholder="ketikan nama kegiatan"
          />
          <InputLabel
            label="kontak"
            type="text"
            value={kontak}
            onChange={(e) => setKontak(e.target.value)}
            placeholder="08..."
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <InputLabel
            label="Tanggal Peminjaman"
            type="date"
            value={tglPeminjaman}
            onChange={(e) => setTglPeminjaman(e.target.value)}
            placeholder="ketikan nama kegiatan"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <InputLabel
            label="Jam Mulai Kegiatan"
            value={jamMulai}
            onChange={(e) => setJamMulai(e.target.value)}
            type="time"
          />
          <InputLabel
            label="Jam Selesai Kegiatan"
            type="time"
            value={jamSelesai}
            onChange={(e) => setJamSelesai(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <InputFile
            label="Upload File Peminjaman"
            placeholder={file ? file : "input file disini"}
            onChange={(selectedFile) => setFile(selectedFile)}
          />
          {data && (
            <a
              href={`${apiUrl}${data.file_pengajuan}`}
              className="text-custom-500 hover:text-custom-100 text-sm text-left underline cursor-pointer ml-2"
              download
            >
              Download disini jika belum ada file peminjaman
            </a>
          )}
        </div>
        <div className="sm:grid sm:grid-cols-3">
          <Button label="Ajukan Peminjaman" size="small" color="primary" />
        </div>
      </form>
      {openModal && (
        <Alert
          onClose={() => {
            resetFormFields();
            setModal(false);
          }}
          onDirect={() => navigate("/riwayat")}
        />
      )}
    </div>
  );
}
