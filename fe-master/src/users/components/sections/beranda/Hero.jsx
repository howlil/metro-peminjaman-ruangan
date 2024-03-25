import Container from "../../ui/Container";
import FormSearch from "../../Layouts/FormSearch";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url('/public/bg.svg')`,
      }}
      className="relative min-h-screen bg-no-repeat  cover bg-right-top "
    >
      <Container>
        <div className="absolute mt-48   min-h-screen  w-full max-w-2xl  ">
          <h1 className="text-custom-300 text-5xl font-bold text-left  leading-snug mb-6">
            Selamat Datang <br /> Di Peminjaman Ruangan
          </h1>
          <FormSearch />
        </div>
      </Container>
    </div>
  );
}
