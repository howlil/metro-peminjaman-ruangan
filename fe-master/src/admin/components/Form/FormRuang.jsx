import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import Dropdown from "../Input/Dropdown";
import InputNum from "../Input/InputNum";
import CheckboxList from "../Input/CheckboxList";
import DragDropFiles from "../Input/DragDropFiles";
import { ButtonWithIcon } from "../ButtonWithIcon";
import { pilihanGedung } from "@/admin/data/data";
import { pilihanLantai } from "@/admin/data/data";
import { pilihanFasilitas } from "@/admin/data/data";

export default function FormRuang() {
    return (
      <>
      <form action="#" method="post">
        <Input label="Nama Ruangan" placeholder="Masukkan nama ruangan"></Input>
        <TextArea label="Deskripsi" placeholder="Masukkan deskripsi" ></TextArea>
        <div className="grid gap-5 min-w-full grid-cols-2">
            <InputNum label="Kapasitas" placeholder="Masukkan Kapasitas"></InputNum>
            <Input label="Penanggung Jawab" placeholder="Masukkan Penanggung Jawab"></Input>
        </div>
        <div className="grid gap-5 min-w-full grid-cols-2">
            <Dropdown label="Gedung" placeholder="Pilih Gedung" options={pilihanGedung}></Dropdown>
            <Dropdown label="Lantai" placeholder="Pilih Lantai" options={pilihanLantai}></Dropdown>
        </div>
        <CheckboxList label="Fasilitas" data={pilihanFasilitas}></CheckboxList>
        <DragDropFiles></DragDropFiles>
        <div className="flex justify-end w-full">
        <ButtonWithIcon label="Simpan" icon="/simpan.svg" background="bg-custom-100"/>
        </div>



      </form>
      </>
    );
  }