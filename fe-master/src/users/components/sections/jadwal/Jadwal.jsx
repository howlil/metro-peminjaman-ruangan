import Calendar from "./Calender";
import Container from "../../ui/Container";
export default function Jadwal() {
  return (
    <Container>
      <div
        data-aos-duration="1500"
        data-aos-anchor-easing="ease-in-out"
        data-aos="fade-up"
        className="py-16"
      >
        <Calendar />
      </div>
    </Container>
  );
}
