import InputLabel from "../../ui/InputLabel";
import InputSelect from "../../ui/InputSelect";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";
import cekJadwal from "@/api/users/beranda/cekJadwal";

export default function FormSearch() {
  const [ruang, setRuang] = useState([]);
  const [selectedRuang, setSelectedRuang] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [isSuccess, setSuccess] = useState("");
  const [isFail, setFail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataRuanganUser();
        if (result && result.data) {
          setRuang(
            result.data.map((room) => ({
              value: room.id_ruangan.toString(),
              label: room.nama_ruangan,
            }))
          );
        } else {
          console.log(
            "Received a successful response, but no data was included."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await cekJadwal(tanggal, waktu, selectedRuang);

      console.log(result);
      setSuccess("Schedule check successful"); // Update your state based on actual result
      setFail(""); // Clear any previous error messages
    } catch (error) {
      console.error("Error checking schedule:", error.message);
      setFail("Failed to check schedule"); // Update your state to reflect the failure
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InputLabel
            placeholder="mm/dd/yy"
            type="date"
            label="Tanggal"
            onChange={(e) => setTanggal(e.target.value)}
          />
          <InputLabel
            placeholder="hr/mn"
            type="time"
            label="Waktu"
            onChange={(e) => setWaktu(e.target.value)}
          />
          <InputSelect
            label="Ruangan"
            name="ruangan"
            options={ruang}
            value={selectedRuang}
            placeholder="Pilih ruangan"
            onChange={(e) => setSelectedRuang(e.target.value)}
          />
        </div>
        <div className="sm:grid sm:grid-cols-3 " dir="rtl">
          <div className="col-span-1">
            <Button type="submit" label="Check" color="primary" size="small" />
          </div>
          <div className="col-span-2"></div>
        </div>
      </form>
    </div>
  );
}
