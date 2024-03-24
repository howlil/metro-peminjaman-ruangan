import Container from "../../ui/Container";
import Accordion from "../../ui/Acordion";
export default function AlurPinjam() {
  return (
    <div className="bg-custom-200 py-12">
      <Container>
        <h1 className="text-custom-600 text-3xl px-6 border-l-4  border-custom-100">
          Alur Cara Peminjaman
        </h1>
        <div className="flex gap-12 my-8">
          <Accordion />
          <div className="w-5/6">
            <p>File peminjaman Download Disini</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
