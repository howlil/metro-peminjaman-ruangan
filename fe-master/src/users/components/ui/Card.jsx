import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { link, title, describe, image } = props;
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/${image}`; // Correctly append 'image' to 'apiUrl'

  return (
    <div
      data-aos-duration="1500"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="w-full p-3 border-gray-200 border-2 rounded-md hover:shadow-2xl hover:shadow-custom-500 transition-all ease-in-out duration-500"
    >
      <Link to={`/ruangan/${link}`}>
        <img
          className="w-full h-56 rounded-md object-cover"
          src={apiUrl}
          alt="Room"
        />
        <figcaption className="my-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="my-3 leading-5 text-sm text-custom-500">{describe}</p>
        </figcaption>
        <span className="flex space-x-2 items-center">
          <p className="font-medium">Lihat detail</p>
          <ArrowRight size={20} />
        </span>
      </Link>
    </div>
  );
}
