import { ChevronDown } from "lucide-react";
import { navbardata } from "../data/NavLink";
import ActiveRoute from "./ActiveRoute";
import DropDown from "./ui/DropDown";
import { dataRuang } from "../data/data";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

import Container from "./ui/Container";
export default function Navbar() {
  return (
    <Container>
      <div className="flex justify-between py-6 md:py-0 items-center">
        <img src="/logo.svg" alt="Logo" />
        <div className="md:hidden">
          <MobileNav />
        </div>
        <nav className="hidden md:flex ">
          {navbardata.map((data, i) => (
            <div key={i} className="sm:flex sm:items-center">
              {data.label.toLowerCase() === "ruangan" ? (
                <DropDown title="Ruangan" items={dataRuang} />
              ) : (
                <ActiveRoute to={data.link}>
                  <p>{data.label}</p>
                </ActiveRoute>
              )}
            </div>
          ))}
        </nav>
      </div>
    </Container>
  );
}
