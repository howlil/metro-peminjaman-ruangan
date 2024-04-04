import Layout from "../../Layout";
import CalenderInfo from "./CalenderInfo";
import CheckCard from "./CheckCard";
import FormPeminjaman from "./FormPeminjaman";
import Navbar from "../../Navbar";
import { useState } from "react";
import CalenderRef from "./CalenderRef";

export default function LayoutRuang() {
  const [isCalender, setCalender] = useState(true);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1">
          <CheckCard />
        </div>
        <div className="col-span-2">
          {isCalender ? (
            <CalenderRef onClick={() => setCalender(false)} />
          ) : (
            <FormPeminjaman />
          )}
        </div>
      </div>
    </>
  );
}
