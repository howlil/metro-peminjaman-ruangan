import { Card } from "@material-tailwind/react";

export default function TabelRiwayat({ dataRiwayat }) {
  return (
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
            {dataRiwayat.map(({ kegiatan, ruang, tanggal, mulai, status}, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{kegiatan}</td>
                <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{ruang}</td>
                <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{tanggal}</td>
                <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{mulai}</td>
                <td className="px-4 py-2 text-sm text-gray-800 w-1/6">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
