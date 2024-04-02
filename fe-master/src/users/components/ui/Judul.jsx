import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Judul({ judul }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
    data-aos-duration="1500"
     data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="mb-16 max-sm:mb-8 flex flex-col space-y-2 items-center"
    >
      <h1 className="font-medium text-4xl text-center  ">{judul}</h1>
      <hr className="border-custom-100 w-12   border-b-4" />
    </div>
  );
}
