import GaleriRuangan from "./GaleriRuangan";
import Container from "../../ui/Container";
import DeskripsiRuang from "./DeskripsiRuang";
export default function DetailRuang() {
  return (
    <Container>
      <div className="grid grid-cols-2 my-16">
        <GaleriRuangan />
        <DeskripsiRuang />
      </div>
    </Container>
  );
}
