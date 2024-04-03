import Container from "../../ui/Container";
import GaleriRuangan from "./GaleriRuangan";
import DeskripsiRuang from "./DeskripsiRuang";

export default function DetailRuang() {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 my-8 sm:my-16">
        <GaleriRuangan />
        <DeskripsiRuang />
      </div>
    </Container>
  );
}
