import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import Dropdown from "../Input/Dropdown";
import InputNum from "../Input/InputNum";
import Judul from "../Judul";
import CheckboxList from "../Input/CheckboxList";
import DragDropFiles from "../Input/DragDropFiles";
import { ButtonWithIcon } from "../ButtonWithIcon";
import { pilihanGedung } from "@/admin/data/data";
import { pilihanLantai } from "@/admin/data/data";
import { pilihanFasilitas } from "@/admin/data/data";
import Simpan from "../Overlays/Simpan";
import { useState } from "react";
import { ButtonSimple } from "../ButtonSimple";
import InputPass from "../Input/InputPass";

export default function FormLogin() {
  const [showSimpan, setShowSimpan] = useState(false);

  const handleSimpanOpen = () => {
    setShowSimpan(true);
  };
    return (
      <>
      <div className="h-screen flex items-center justify-center w-full">
        <div className="h-screen w-1/2">
            <img src="/bg-login.svg" alt="image" className="h-full w-full object-cover"/>
        </div>
        <div className="flex items-center justify-center h-screen w-1/2">
            <form action="#" method="post" className="items-center">
                <Judul judul="Login to Your Account"></Judul>
                <Input label="Email" placeholder="Masukkan Email"></Input>
                <InputPass label="Password" placeholder="Masukkan Password"></InputPass>
                <ButtonSimple label="Login" background="bg-custom-100 w-full flex items-center justify-center mt-4 py-3" onClick={() => { window.location.href = "/admin/dashboard"; }}/>
            </form>
        </div>
      </div>
      </>
    );
  }