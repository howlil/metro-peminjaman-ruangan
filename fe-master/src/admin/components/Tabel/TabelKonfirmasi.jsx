import { Card } from "@material-tailwind/react";
import { ButtonRound } from "../ButtonRound";
import Konfirmasi from "../Overlays/Konfirmasi";
import { useState, useEffect } from "react";
import tampilKonfirmasi from "@/api/admin/konfirmasi/tampilKonfirmasi";
import { Skeleton } from "../Skeleton";

export default function TabelKonfirmasi({ dataKonfirmasi }) {
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [getKonfirmasi, setKonfirmasi] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await tampilKonfirmasi();
        setKonfirmasi(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getData();
  }, []);

  const handleKonfirmasiOpen = (item) => {
    setSelectedItem(item);
    setShowKonfirmasi(true);
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : getKonfirmasi ? (
        <Card className="w-full rounded-lg border border-gray-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Nama Kegiatan</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Ruangan</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Tanggal</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Jam Mulai</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Jam Selesai</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Status</th>
                </tr>
              </thead>
              <tbody>
                {getKonfirmasi.map((konfirm, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{konfirm.nama_kegiatan}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{konfirm.dataRuangan.nama_ruangan}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{konfirm.tanggal_peminjaman}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{konfirm.jam_mulai_peminjaman}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{konfirm.jam_selesai_peminjaman}</td>
                    <td className="px-4 py-2 w-1/6">
                      <ButtonRound background="bg-custom-700" label={konfirm.status} onClick={() => handleKonfirmasiOpen()}></ButtonRound>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <p>Data untuk Dikonfirmasi Tidak Tersedia</p>
      )}
      {showKonfirmasi && (
        <Konfirmasi onClose={() => setShowKonfirmasi(false)} />
      )}
    </>
  );
}
