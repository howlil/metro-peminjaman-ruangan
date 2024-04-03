import Container from "../../ui/Container";
import Accordion from "../../ui/Acordion";
import getDataCaraPeminjaman from "@/api/users/beranda/getDataCaraPeminjaman";
import YoutubeEmbed from "../../ui/YoutubeEmbed";
import { useEffect, useState } from "react";

export default function AlurPinjam() {
  const [data, setData] = useState(null);
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/filePengajuan/`; // Correctly append 'image' to 'apiUrl'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDataCaraPeminjaman();
        setData(res.data[0]);
        console.log(res.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const extractYoutubeId = (url) => {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match && match[1];
  };
  return (
    <div className="bg-custom-200 py-12 sm:py-24">
      <Container>
        <h1
          data-aos-duration="1500"
          data-aos-anchor-easing="ease-in-out"
          data-aos="fade-up"
          className="text-custom-600 text-3xl px-6 border-l-4  border-custom-100"
        >
          Alur Cara Peminjaman
        </h1>
        <div className="sm:flex sm:gap-12 my-8 ">
          <Accordion />
          <div className="sm:w-4/6 my-8 sm:my-0 sm:flex sm:flex-col sm:justify-between">
            <p
              data-aos-duration="1500"
              data-aos-anchor-easing="ease-in-out"
              data-aos="fade-up"
              className="text-white text-left mb-10 text-xl"
            >
              File peminjaman{" "}
              {data && (
                <a
                  href={`${apiUrl}${data.file_pengajuan}`} // Corrected the way of concatenation
                  className="text-custom-100 underline cursor-pointer ml-2"
                  download
                >
                  Download Disini
                </a>
              )}
            </p>
            {data && (
              <div
                data-aos-duration="1500"
                data-aos-anchor-easing="ease-in-out"
                data-aos="fade-up"
              >
                <p className="text-white mb-4">Nonton tutorial</p>
                <YoutubeEmbed videoId={extractYoutubeId(data.link_tutorial)} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
