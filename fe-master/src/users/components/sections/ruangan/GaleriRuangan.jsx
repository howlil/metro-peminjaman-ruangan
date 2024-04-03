import getDetailRuangan from "@/api/users/beranda/getDetailRuangan";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";
export default function GaleriRuangan() {
  const location = useLocation();
  const id = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const imgUrl = `${import.meta.env.VITE_API_BASE_URL}/fotoRuangan/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailRuangan(id);
        if (res && res.success) {
          setData(res.data);
          setImg(res.data.dataGambar);
          console.log(img);
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };
    fetchData();
  }, [id]);
  const isLoading = img === null;
  if (!data || !img) {
    return <Skeleton variant="rectangular" width="100%" height={158} />;
  }

  return (
    <div 
    
    className="flex flex-col gap-y-2 ">
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={158} />
      ) : (
        <div className="aspect-w-16 aspect-h-9 h-1/3">
          {img.slice(0, 2).map((gambar, index) => (
            <img
              key={index}
              className="object-cover w-full h-full"
              src={`${imgUrl}${gambar.file_gambar}`}
              alt="gambar"
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        {isLoading
          ? Array.from(new Array(3)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width="100%"
                height={108}
              />
            ))
          : img
              .slice(0, 3)
              .map((gambar, index) => (
                <img
                  key={index}
                  className="w-full h-32 bg-center object-cover bg-cover"
                  src={`${imgUrl}${gambar.file_gambar}`}
                  alt="gambar"
                />
              ))}
      </div>
      <div className="text-center rounded-md p-4 border-2 grid grid-cols-3">
        <section>
          <p className="text-gray-600">Gedung</p>
          <h1 className="text-xl font-bold">{data.gedung}</h1>
        </section>
        <section className="border-l border-r">
          <p className="text-gray-600">Kapasitas</p>
          <h1 className="text-xl font-bold">{data.kapasitas}</h1>
        </section>
        <section>
          <p className="text-gray-600">Lantai</p>
          <h1 className="text-xl font-bold">{data.lantai}</h1>
        </section>
      </div>
    </div>
  );
}
