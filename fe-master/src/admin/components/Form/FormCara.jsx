import Input from "../Input/Input";
import InputFile from "../Input/InputFile";
import { ButtonWithIcon } from "../ButtonWithIcon";
import Simpan from "../Overlays/Simpan";
import { useState } from "react";

export default function FormCara() {
  const [showSimpan, setShowSimpan] = useState(false);

  const handleSimpanOpen = () => {
    setShowSimpan(true);
  };
    return (
      <>
      <form action="#" method="post">
        <InputFile label="File Format Pengajuan" onChange={(files) => console.log(files)}></InputFile>
        <Input label="Link Tutorial" placeholder="Masukkan Link Youtube (Contoh: www.youtube.com)"></Input>
        <div className="mt-10">
        <ButtonWithIcon label="Simpan" icon="/simpan.svg" background="bg-custom-100" onClick={() => handleSimpanOpen()}/>
        </div>
      </form>
      {showSimpan && (
        <Simpan onClose={() => setShowSimpan(false)} />
      )}
      </>
    );
  }