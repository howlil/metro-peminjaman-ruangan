import Container from "../../ui/Container";
import GaleriRuangan from "./GaleriRuangan";
import DeskripsiRuang from "./DeskripsiRuang";

export default function DetailRuang() {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 my-8 sm:my-16">
        <div
          data-aos-duration="3000"
          data-aos-anchor-easing="ease-in-out"
          data-aos="fade-right"
        >
          <GaleriRuangan />
        </div>
        <div
          data-aos-duration="3000"
          data-aos-anchor-easing="ease-in-out"
          data-aos="fade-left"
        >
          <DeskripsiRuang />
        </div>
      </div>
    </Container>
  );
}
