import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";

function Dropdown({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ruang, setRuang] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchRuang = async () => {
      const res = await getDataRuanganUser();
      if (res && res.data) {
        setRuang(res.data);
      }
    };
    fetchRuang();
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-3 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-40 bg-white rounded shadow z-10">
          <ul className="py-1">
            {ruang.map((item, index) => (
              <Link to={`/ruangan/${item.id}`} key={index}>
                {" "}
                <li
                  className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.nama_ruangan}{" "}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
