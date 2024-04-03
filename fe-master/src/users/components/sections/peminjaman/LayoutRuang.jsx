import Layout from "../../Layout";
import CalenderInfo from "./CalenderInfo";
import CheckCard from "./CheckCard";
import FormPeminjaman from "./FormPeminjaman";
import Navbar from "../../Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function LayoutRuang() {
  const [isCalender, setCalender] = useState(true);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <CheckCard />
        </div>
        <div className="col-span-2">
          {isCalender ? (
            <CalenderInfo onClick={() => setCalender(false)} />
          ) : (
            <FormPeminjaman />
          )}
        </div>
      </div>
    </>
  );
}
