import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import Filter from "../components/Filter"
import { SidebarProvider } from "../components/SidebarContext";
import { dataRuang } from "../data/data";
import { dataPeminjaman } from "../data/data";
import TabelPengajuan from "../components/Tabel/TabelPengajuan";

export default function KelolaPengajuanPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Ajuan Peminjaman"></Judul>
            <div className="flex space-x-4">
              <div className="flex ml-auto mb-4 justify-center items-center"> 
              <h1 className="mr-3">Filter</h1>
              <Filter></Filter>
              </div>
            </div>
            <TabelPengajuan dataPeminjaman={dataPeminjaman} ></TabelPengajuan>
          </Content>

        </SidebarProvider>
      </Container>
    </>
  );
}