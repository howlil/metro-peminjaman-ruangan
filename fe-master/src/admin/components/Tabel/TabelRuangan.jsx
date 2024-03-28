import { Card } from "@material-tailwind/react";
import { ButtonWithIcon } from "../ButtonWithIcon";

export default function TabelRuangan({dataRuangan}) {
  return (
    <Card className="w-full rounded-lg border border-gray-300">
      <table className="w-full min-w-max table-auto text-left border border-gray-800 rounded-lg overflow-hidden">
        <tbody>
          {dataRuangan.map(({ nama }, index) => (
            <tr key={nama} class="flex odd:bg-white even:bg-custom-800">
              <td className="flex  p-4 w-1/2">
                {nama}               
              </td>
              <td className="flex p-4 w-1/2 justify-end gap-5 mr-10">
                <a href="#">
                  <img src="/delete.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/edit.svg" alt="" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}