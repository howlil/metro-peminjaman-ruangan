import { Link } from "react-router-dom";

export default function CardRuangan({ src, title, to }) {
  return (
    <div className="overflow-hidden rounded-md hover:shadow-xl hover:shadow-gray-400 transition-all ease-in-out duration-300">
      <Link to={to} className="block">
        <div
          className="bg-cover bg-center h-48 w-full flex items-center justify-center"
          style={{ backgroundImage: `url(${src})` }}
        >
          <p className="bg-custom-100 text-white hover:scale-105 ease-in-out duration-300 transition-all rounded-md font-medium px-2 py-1">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
