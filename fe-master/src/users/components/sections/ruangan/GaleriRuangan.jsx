import React from "react";

export default function GaleriRuangan() {
  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-right"
      className="flex flex-col gap-y-2 "
    >
      <div className="aspect-w-16 aspect-h-9 h-1/3">
        <img className="object-cover w-full h-full" src="/img.jpg" alt="" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <img className="w-full h-auto bg-cover" src="/img.jpg" alt="" />
        <img className="w-full h-auto bg-cover" src="/img.jpg" alt="" />
        <img className="w-full h-auto bg-cover" src="/img.jpg" alt="" />
      </div>
      <div className="text-center rounded-md p-4 border-2 grid grid-cols-3">
        <section>
          <p className="text-gray-600">Gedung</p>
          <h1 className="text-xl font-bold">Gedung A</h1>
        </section>
        <section>
          <p className="text-gray-600">Gedung</p>
          <h1 className="text-xl font-bold">Gedung B</h1>
        </section>
        <section>
          <p className="text-gray-600">Gedung</p>
          <h1 className="text-xl font-bold">Gedung C</h1>
        </section>
      </div>
    </div>
  );
}
