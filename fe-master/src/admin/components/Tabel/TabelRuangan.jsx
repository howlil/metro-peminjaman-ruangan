import { Card } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Hapus from "../Overlays/Hapus";
import { useNavigate } from "react-router-dom";
import tampilRuangan from "@/api/admin/ruangan/tampilRuangan";
import { Skeleton } from "../Skeleton";

export default function TabelRuangan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getRuangan, setRuangan] = useState(null);
  const [ruanganToDelete, setRuanganToDelete] = useState(null);
  const [loading, setLoading] = useState(true); 

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await tampilRuangan();
        setRuangan(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)

      }
    };
    getData();
  }, []);

  const handleDeleter = async (id) => {
    try {
      await hapusRuangan(id);
      setRuangan(getRuangan.filter((ruang) => ruang.id_ruangan !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const showDeleteConfirmation = (id) => {
    setRuanganToDelete(id);
    setIsModalOpen(true);
  };
  return (
    <div>
    {loading ? (
      <Skeleton />
      ) : getRuangan ? (
          <Card className="w-full rounded-lg border border-gray-300">
          <table className="w-full min-w-max table-auto text-left text-sm border border-gray-800 rounded-lg overflow-hidden">
            <tbody>
              {getRuangan.map((ruang, index) => (
                <tr key={ruang.id_ruangan} className="flex odd:bg-white even:bg-custom-800">
                  <td className="flex  p-4 w-1/2">
                    {ruang.nama_ruangan}               
                  </td>
                  <td className="flex p-4 w-1/2 justify-end gap-5 mr-10">
                    <button onClick={() => showDeleteConfirmation(ruang.id_ruangan)}>
                        <img src="/delete.svg" alt="Delete" />
                    </button>
                    <button>
                      <img src="/edit.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        ) : (
          <p>Data Ruangan Tidak Tersedia</p>
        )
      }
      
      <Hapus isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onConfirm={() => {
        handleDeleter(ruanganToDelete);
        setIsModalOpen(false);
      }} />
    </div>
  );
}