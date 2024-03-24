import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const AccordionItem = ({ number, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-2 border-gray-500 rounded-md  ">
      <div
        className="flex justify-between items-center p-4 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="bg-custom-100 text-white rounded-md w-8 h-8 flex items-center justify-center mr-3">
            {number}
          </div>
          <p className="text-custom-600">{label}</p>
        </div>
        <div>
          {isOpen ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
        </div>
      </div>
      {isOpen && <div className="bg-gray-500 p-4 rounded-md">{children}</div>}
    </div>
  );
};

export default function Accordion() {
  return (
    <div className=" w-full rounded-lg">
      <AccordionItem number="1" label="Klik tombol 'Peminjaman' pada navbar">
        <p>Content for item 1 here</p>
      </AccordionItem>
      <AccordionItem number="1" label="Klik tombol 'Peminjaman' pada navbar">
        <p>Content for item 1 here</p>
      </AccordionItem>
      <AccordionItem number="1" label="Klik tombol 'Peminjaman' pada navbar">
        <p>Content for item 1 here</p>
      </AccordionItem>
      <AccordionItem number="1" label="Klik tombol 'Peminjaman' pada navbar">
        <p>Content for item 1 here</p>
      </AccordionItem>
      <AccordionItem number="1" label="Klik tombol 'Peminjaman' pada navbar">
        <p>Content for item 1 here</p>
      </AccordionItem>
    </div>
  );
}
