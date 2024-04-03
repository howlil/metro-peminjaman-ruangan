import { Link } from "react-router-dom";

export default function CardRuangan({ src, title, to }) {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/${src}`; // Correctly append 'image' to 'apiUrl'

  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="overflow-hidden  rounded-md hover:shadow-xl hover:shadow-gray-400 transition-all ease-in-out duration-300"
    >
      <Link to={to} className="block">
        <div
          className="bg-cover bg-center h-48 w-full flex items-center justify-center"
          style={{ backgroundImage: `url(${apiUrl})` }}
        >
          <p className="bg-custom-400 text-white rounded-md font-medium px-2 py-1">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
