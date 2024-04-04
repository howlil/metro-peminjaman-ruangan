import { Link } from "react-router-dom";

export default function CardRuangan({ src, title, to }) {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/${src}`;

  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="overflow-hidden rounded-md hover:shadow-lg hover:shadow-gray-200 transition-all ease-in-out duration-300 relative"
    >
      <Link to={to} className="block">
        <img src={apiUrl} alt={title} className="w-full h-48 object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-custom-400 text-center text-white rounded-md font-medium px-2 py-1 m-3">
          {title}
        </p>
      </Link>
    </div>
  );
}
