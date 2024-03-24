import InputLabel from "../ui/InputLabel";
import InputSelect from "../ui/InputSelect";
import Button from "../ui/Button";

export default function FormSearch() {
  return (
    <div>
      <div className="bg-white border-2 rounded-lg p-6">
        <form className="flex flex-col items-end space-y-4">
          <div className="flex space-x-2">
            <InputLabel placeholer="mm/dd/yy" type="date" label="Tanggal" />
            <InputLabel placeholer="hr/mn" type="time" label="Waktu" />
            {/* <InputSelect label="Ruangan " /> */}
          </div>
          <div className="w-24 ">
            <Button label="check" color="primary" size="small" />
          </div>
        </form>
      </div>
    </div>
  );
}
