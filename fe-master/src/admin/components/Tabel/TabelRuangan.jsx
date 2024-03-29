import { Card } from "@material-tailwind/react";
import { useState } from "react";
import Hapus from "../Overlays/Hapus";

export default function TabelRuangan({dataRuangan}) {
  const [showHapus, setShowHapus] = useState(false); 
  const [selectedRuangan, setSelectedRuangan] = useState(null); 

  const handleHapusClick = (ruangan) => {
    setSelectedRuangan(ruangan);
    setShowHapus(true);
  };
  return (
    <>
      <Card className="w-full rounded-lg border border-gray-300">
        <table className="w-full min-w-max table-auto text-left text-sm border border-gray-800 rounded-lg overflow-hidden">
          <tbody>
            {dataRuangan.map(({ nama }, index) => (
              <tr key={nama} class="flex odd:bg-white even:bg-custom-800">
                <td className="flex  p-4 w-1/2">
                  {nama}               
                </td>
                <td className="flex p-4 w-1/2 justify-end gap-5 mr-10">
                <button onClick={() => handleHapusClick(nama)}>
                      <img src="/delete.svg" alt="Delete" />
                    </button>
                  <a href="#">
                    <img src="/edit.svg" alt="" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {showHapus && (
        <Hapus onClose={() => setShowHapus(false)} />
      )}
    </>
  );
}