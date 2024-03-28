import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import Filter from "../components/Filter";
import { dataRuang } from "../data/data"; 
import TabelKonfirmasi from "../components/Tabel/TabelKonfirmasi";
import { dataPeminjaman } from "../data/data";

export default function KelolaKonfirmasiPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Konfirmasi Selesai"></Judul>
            <div className="flex space-x-4">
              <div className="flex ml-auto mb-4 justify-center items-center"> 
              <h1 className="mr-3">Filter</h1>
              <Filter data={dataRuang}></Filter>
              </div>
            </div>
            <TabelKonfirmasi dataKonfirmasi={dataPeminjaman}></TabelKonfirmasi>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}