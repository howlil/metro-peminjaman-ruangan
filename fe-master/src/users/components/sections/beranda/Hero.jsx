import Container from "../../ui/Container";
import FormSearch from "./FormSearch";

export default function Hero() {
  return (
    <div
      data-aos-duration="1500"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="relative min-h-screen bg-no-repeat sm:bg-contain sm:bg-right bg-cover mb-16  "
      style={{
        backgroundImage: `url('/public/bg.svg')`,
      }}
    >
      <div className="absolute bg-black bg-opacity-20 lg:hidden min-h-screen h-full w-full"></div>
      <Container>
        <div
          data-aos-duration="1500"
          data-aos-anchor-easing="ease-in-out"
          data-aos="fade-up"
          className="relative "
        >
          <div className="absolute mt-20 sm:mt-48  lg:mt-24 min-h-screen w-full max-w-xl  ">
            <h1 className="text-white lg:text-black text-5xl sm:text-6xl lg:text-5xl font-bold text-left leading-tight mb-8">
              Selamat Datang <br /> Di Peminjaman Ruangan
            </h1>
            <FormSearch />
          </div>
        </div>
      </Container>
    </div>
  );
}
