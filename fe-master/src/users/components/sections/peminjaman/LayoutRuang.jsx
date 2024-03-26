import Layout from "../../Layout";
import Container from "../../ui/Container";
import CheckCard from "./CheckCard";
import FormPeminjaman from "./FormPeminjaman";
export default function LayoutRuang() {
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <CheckCard />
        </div>
        <div className="col-span-2">
          <Container>
            <FormPeminjaman />
          </Container>
        </div>
      </div>
    </Layout>
  );
}
