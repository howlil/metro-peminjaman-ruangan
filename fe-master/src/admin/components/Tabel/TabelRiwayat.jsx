import { Card } from "@material-tailwind/react";
import tampilRiwayat from "@/api/admin/riwayat/tampilRiwayat";
import { useState, useEffect } from "react";
import { Skeleton } from "../Skeleton";

export default function TabelRiwayat({ dataRiwayat }) {
  const [getRiwayat, setRiwayat] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await tampilRiwayat();
        setRiwayat(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : getRiwayat ? (
        <Card className="w-full rounded-lg border border-gray-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Nama Kegiatan</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Ruangan</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Tanggal</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Jam</th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700 w-1/6">Notifikasi</th>
                </tr>
              </thead>
              <tbody>
                {getRiwayat.map((riwayat, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{riwayat.nama_kegiatan}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{riwayat.dataRuangan.nama_ruangan}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{riwayat.tanggal_peminjaman}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{riwayat.jam_mulai_peminjaman}</td>
                    <td className="px-4 py-2 text-sm text-gray-800 w-1/6">Selesai Digunakan</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <p>Data Riwayat Tidak Tersedia</p>
      )}
    </>
  );
}
