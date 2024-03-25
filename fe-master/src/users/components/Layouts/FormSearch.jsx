import InputLabel from "../ui/InputLabel";
import InputSelect from "../ui/InputSelect";
import Button from "../ui/Button";

export default function FormSearch({ onSearch }) {
  // Here you could also fetch or pass the room options dynamically
  const roomOptions = [
    { value: "room1", label: "Room 1" },
    { value: "room2", label: "Room 2" },
  ];

  return (
    <div className="bg-white border-2 rounded-lg p-6">
      <form onSubmit={onSearch} className="flex flex-col  space-y-4">
        <div className="grid grid-cols-3 gap-2">
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
