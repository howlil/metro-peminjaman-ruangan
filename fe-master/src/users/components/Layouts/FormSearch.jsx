import InputLabel from "../ui/InputLabel";
import InputSelect from "../ui/InputSelect";
import Button from "../ui/Button";
import cekJawdwal from "@/api/users/beranda/cekJadwal";
import { useEffect } from "react";

export default function FormSearch({ onSearch }) {
  const roomOptions = [
    { value: "room1", label: "Room 1" },
    { value: "room2", label: "Room 2" },
  ];

  // useEffect(()=>{
  //     const fetchData = async ()=>{
  //         await cekJawdwal().then((response)=>{
  //           console.log('====================================');
  //           console.log(response);
  //           console.log('====================================');
  //         })
  //     }
  //     fetchData()

  // },[])

  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 sm:p-6">
      <form onSubmit={onSearch} className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InputLabel placeholder="mm/dd/yy" type="date" label="Tanggal" />
          <InputLabel placeholder="hr/mn" type="time" label="Waktu" />
          <InputSelect label="Ruangan" options={roomOptions} />
        </div>
        <div className="flex justify-end">
          <Button type="submit" label="Check" color="primary" size="small" />
        </div>
      </form>
    </div>
  );
}
