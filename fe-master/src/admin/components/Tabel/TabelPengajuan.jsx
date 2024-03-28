import { Card } from "@material-tailwind/react";

const LabelTextPair = ({ label, text }) => (
    <div className="flex items-center mb-1">
      <span>{label}</span>
      <span>{text}</span>
    </div>
  );

export default function TabelPengajuan({dataPeminjaman}) {
  return (
    <Card className="w-full rounded-lg border border-gray-300">
      <table className="w-full min-w-max table-auto text-left border border-gray-800 rounded-lg overflow-hidden">
        <tbody>
          {dataPeminjaman.map(({ ruang, nama, jabatan, kegiatan, kontak, tanggal, mulai, selesai, form }, index) => (
            <tr key={nama} class="flex odd:bg-white even:bg-custom-800">
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
                    <a className="border-b border-black border-b-2" href={form}>Download disini</a>
                </section>
                    </div>
                </div>
                
                
              </td>
              
              <td className="ml-auto mt-auto flex p-4">
                <div className="bg-custom-700 text-white text-center mr-2 py-2 px-4 rounded">
                    Tolak
                </div>
                <div className="bg-custom-100 text-white text-center py-2 px-4 rounded">
                    Setujui
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}