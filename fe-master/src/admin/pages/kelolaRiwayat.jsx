import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import TabelRiwayat from "../components/Tabel/TabelRiwayat";
import { dataPeminjaman } from "../data/data";
import Filter from "../components/Filter";
import { dataRuang } from "../data/data";

export default function KelolaRiwayatPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Riwayat"></Judul>
            <div className="flex space-x-4">
              <div className="flex ml-auto mb-4 justify-center items-center"> 
              <h1 className="mr-3">Filter</h1>
              <Filter data={dataRuang}></Filter>
              </div>
            </div>
            <TabelRiwayat dataRiwayat={dataPeminjaman}></TabelRiwayat>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}