import Layout from "../../Layout";
import CalenderInfo from "./CalenderInfo";
import CheckCard from "./CheckCard";
import FormPeminjaman from "./FormPeminjaman";
export default function LayoutRuang() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <CheckCard />
        </div>
        <div className="col-span-2">
          <FormPeminjaman />
          <CalenderInfo />
        </div>
      </div>
    </Layout>
  );
}
