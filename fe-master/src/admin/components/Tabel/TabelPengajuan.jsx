import { Card } from "@material-tailwind/react";
import { ButtonSimple } from "../ButtonSimple";
import Tolak from "../Overlays/Tolak";
import Setuju from "../Overlays/Setuju";
import { useState, useEffect } from "react";
import tampilPengajuan from "@/api/admin/pengajuan/tampilPengajuan";
import { Skeleton } from "../Skeleton";

function getTimeAgo(timestamp) {
  const current = new Date();
  const previous = new Date(timestamp);
  const elapsed = current - previous;

  const minutes = Math.round(elapsed / 60000);

  if (minutes < 1) {
    return 'Baru saja';
  }
  else if (minutes < 60) {
    return `${minutes} menit yang lalu`;
  }
  else if (minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    return `${hours} jam yang lalu`;
  }
  else {
    const days = Math.floor(minutes / 1440);
    return `${days} hari yang lalu`;
  }
}

const LabelTextPair = ({ label, text }) => (
  <div className="flex items-center mb-1">
    <span>{label}</span>
    <span>{text}</span>
  </div>
);

export default function TabelPengajuan() {
  const [showTolakDialog, setShowTolakDialog] = useState(false);
  const [showSetujuDialog, setShowSetujuDialog] = useState(false);
  const [getPengajuan, setPengajuan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await tampilPengajuan();
        setPengajuan(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getData();
  }, []);

  const handleTolakButtonClick = () => {
    setShowTolakDialog(true);
  };

  const handleSetujuButtonClick = () => {
    setShowSetujuDialog(true);
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : getPengajuan ? (
        <Card className="w-full rounded-lg border border-gray-300">
          <table className="w-full min-w-max table-auto text-left text-sm border border-gray-800 rounded-lg overflow-hidden">
            <tbody>
              {getPengajuan.map((ajuan, index) => (
                <tr key={ajuan.id_peminjaman} className="flex odd:bg-white even:bg-custom-800">
                  <td className="flex  p-4 w-1/3">
                    <div className="flex-col">
                      <h1 className="font-medium text-xl mb-2">{ajuan.dataRuangan.nama_ruangan}</h1>
                      <div className="flex gap-5">
                        <section>
                          <LabelTextPair label="Nama Peminjam" />
                          <LabelTextPair label="Jabatan" />
                          <LabelTextPair label="Nama Kegiatan" />
                          <LabelTextPair label="Kontak" />
                        </section>
                        <section>
                          <LabelTextPair text={ajuan.nama_peminjam} />
                          <LabelTextPair text={ajuan.jabatan} />
                          <LabelTextPair text={ajuan.nama_kegiatan} />
                          <LabelTextPair text={ajuan.kontak} />
                        </section>
                      </div>
                    </div>

                  </td>
                  <td className="flex p-4 w-1/3">
                    <div className="flex-col mt-auto">
                      <div className="flex gap-5">
                        <section>
                          <LabelTextPair label="Tanggal Peminjaman" />
                          <LabelTextPair label="Mulai Peminjaman" />
                          <LabelTextPair label="Selesai Peminjaman" />
                          <LabelTextPair label="Form Peminjaman" />
                        </section>
                        <section>
                          <LabelTextPair text={ajuan.tanggal_peminjaman} />
                          <LabelTextPair text={ajuan.jam_mulai_peminjaman} />
                          <LabelTextPair text={ajuan.jam_selesai_peminjaman} />
                          <a className="border-b border-black border-b-2" href={`/admin/pengajuan/${ajuan.file_peminjaman}`}>Download disini</a>
                        </section>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 justify-between grid ml-auto">
                    <div className="ml-auto">
                      <span>{getTimeAgo(ajuan.updated_at)}</span>
                    </div>
                    <div className="ml-auto mt-auto flex gap-3">
                      <ButtonSimple label="Tolak" onClick={handleTolakButtonClick} background="bg-custom-700"></ButtonSimple>
                      <ButtonSimple label="Setujui" onClick={handleSetujuButtonClick} background="bg-custom-100"></ButtonSimple>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showTolakDialog && <Tolak onClose={() => setShowTolakDialog(false)} />}
          {showSetujuDialog && <Setuju onClose={() => setShowSetujuDialog(false)} />}
        </Card>
      ) : (
        <p>Data Pengajuan Tidak Tersedia</p>
      )}
    </>
  );
}
