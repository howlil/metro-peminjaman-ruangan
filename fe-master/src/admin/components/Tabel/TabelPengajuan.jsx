import { Card } from "@material-tailwind/react";
import { ButtonSimple } from "../ButtonSimple";
import Tolak from "../Overlays/Tolak";
import Setuju from "../Overlays/Setuju";
import { useState } from "react";

const LabelTextPair = ({ label, text }) => (
    <div className="flex items-center mb-1">
      <span>{label}</span>
      <span>{text}</span>
    </div>
  );

export default function TabelPengajuan({dataPeminjaman}) {
  const [showTolakDialog, setShowTolakDialog] = useState(false);
  const [showSetujuDialog, setShowSetujuDialog] = useState(false);
  
  const handleTolakButtonClick = () => {
    setShowTolakDialog(true);
  };

  const handleSetujuButtonClick = () => {
    setShowSetujuDialog(true);
  };

  return (
    <Card className="w-full rounded-lg border border-gray-300">
      <table className="w-full min-w-max table-auto text-left text-sm border border-gray-800 rounded-lg overflow-hidden">
        <tbody>
          {dataPeminjaman.map(({ ruang, nama, jabatan, kegiatan, kontak, tanggal, mulai, selesai, form, waktu }, index) => (
            <tr key={nama} className="flex odd:bg-white even:bg-custom-800">
              <td className="flex  p-4 w-1/3">
                <div className="flex-col">
                    <h1 className="font-medium text-xl mb-2">{ruang}</h1>
                    <div className="flex gap-5">
                        <section>
                            <LabelTextPair label="Nama Peminjam" />
                            <LabelTextPair label="Jabatan"/>
                            <LabelTextPair label="Nama Kegiatan"/>
                            <LabelTextPair label="Kontak"/>
                        </section>
                        <section>
                            <LabelTextPair text={nama} />
                            <LabelTextPair text={jabatan} />
                            <LabelTextPair text={kegiatan} />
                            <LabelTextPair text={kontak} />
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
                          <LabelTextPair text={tanggal} />
                          <LabelTextPair text={mulai} />
                          <LabelTextPair text={selesai} />
                          <a className="border-b border-black border-b-2" href={`/admin/pengajuan/${form}`}>Download disini</a>
                      </section>
                    </div>
                </div>
              </td>
              <td className="p-4 justify-between grid ml-auto">
                <div className="ml-auto">
                  <span>{waktu}</span>
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
  );
}