import { navbardata } from "../data/NavLink";
import ActiveRoute from "./ActiveRoute";
import { dataRuang } from "../data/data";
import MobileNav from "./MobileNav";
import Dropdown from "./ui/DropDown";

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
                <Dropdown title="Ruangan" />
              ) : (
                <ActiveRoute to={data.link}>
                  <p>{data.label}</p>
                </ActiveRoute>
              )}
            </div>
          ))}
          ...
        </nav>
      </div>
    </Container>
  );
}
