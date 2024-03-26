import { ChevronDown } from "lucide-react";
import { navbardata } from "../data/NavLink";
import ActiveRoute from "./ActiveRoute";
import DropDown from "./ui/DropDown";
import { dataRuang } from "../data/data";
import { Link } from "react-router-dom";

import Container from "./ui/Container";
export default function Navbar() {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="Logo" />
        <nav className="hidden sm:flex gap-8">
          {navbardata.map((data, i) => (
            <div key={i} className="flex items-center">
              {data.label.toLowerCase() === "ruangan" ? (
                <DropDown title="Ruangan" items={dataRuang} />
              ) : (
                <ActiveRoute to={data.link}>
                  <div className="flex items-center gap-2">{data.label}</div>
                </ActiveRoute>
              )}
            </div>
          ))}
        </nav>
      </div>
    </Container>
  );
}
