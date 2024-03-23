import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { title, describe, image } = props;

  return (
    <div className="w-full p-3 border-gray-200  border-2 rounded-md  hover:shadow-2xl hover:shadow-custom-500 transition-all ease-in-out duration-500 ">
      <Link to={"/"}>
      <img className="w-full rounded-md" src={image} alt="img" />
      <figcaption className="my-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="my-3 leading-5 text-sm text-custom-500">{describe}</p>
      </figcaption>
      <span className="flex space-x-2 items-center">
        <p className="font-medium">lihat detail</p>
        <ArrowRight size={20} />
      </span>
      </Link>
    </div>
  );
}
