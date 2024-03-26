import Layout from "../components/Layout";
import PilihRuang from "../components/sections/peminjaman/PilihRuang";
import { useLocation } from "react-router-dom";
import LayoutRuang from "../components/sections/peminjaman/LayoutRuang";
export default function PeminjamanPage() {
  const loc = useLocation();
  const checkRuang = loc.pathname === "/peminjaman/checkruang";
  return (
    <>
      {!checkRuang ? (
        <Layout>
          <PilihRuang />
        </Layout>
      ) : (
        <LayoutRuang />
      )}
    </>
  );
}
