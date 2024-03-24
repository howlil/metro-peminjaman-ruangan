import Container from "../../ui/Container";
import Accordion from "../../ui/Acordion";
import YoutubeEmbed from "../../ui/YoutubeEmbed";

export default function AlurPinjam() {
  return (
    <div className="bg-custom-200 py-12">
      <Container>
        <h1 className="text-custom-600 text-3xl px-6 border-l-4  border-custom-100">
          Alur Cara Peminjaman
        </h1>
        <div className="flex gap-12 my-8">
          <Accordion />
          <div className="w-4/6 flex flex-col justify-between">
            <p className="text-white text-xl">
              File peminjaman Download Disini
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
