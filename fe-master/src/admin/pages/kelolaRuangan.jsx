import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import { ButtonWithIcon } from "../components/ButtonWithIcon";
import TabelRuangan from "../components/Tabel/TabelRuangan";
import { dataRuang } from "../data/data";

export default function KelolaRuanganPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <div className="flex justify-between w-full mb-10">
              <Judul judul="Ruangan"></Judul>
              <ButtonWithIcon onClick={() => window.location.href = "/admin/ruangan/tambah"} label="Tambah Ruangan" icon="/tambah.svg" background="bg-custom-100"></ButtonWithIcon>
            </div>
            <TabelRuangan dataRuangan={dataRuang}></TabelRuangan>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}