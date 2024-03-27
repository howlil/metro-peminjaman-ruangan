import Container from "../../ui/Container";
import Accordion from "../../ui/Acordion";
import YoutubeEmbed from "../../ui/YoutubeEmbed";

export default function AlurPinjam() {
  return (
    <div className="bg-custom-200 py-12 sm:py-24">
      <Container>
        <h1 className="text-custom-600 text-3xl px-6 border-l-4  border-custom-100">
          Alur Cara Peminjaman
        </h1>
        <div className="sm:flex sm:gap-12 my-8 ">
          <Accordion />
          <div className="sm:w-4/6 my-8 sm:my-0 sm:flex sm:flex-col sm:justify-between">
            <p className="text-white text-left mb-10 text-xl">
              File peminjaman
              <span className="text-custom-100 underline cursor-pointer ml-2">
                Download Disini
              </span>
            </p>
            <div>
              <p className="text-white mb-4">Nonton tutorial</p>
              <YoutubeEmbed videoId="p22EqQBYRBM" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
