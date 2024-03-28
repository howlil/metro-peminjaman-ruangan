import Sidebar from "../components/Sidebar";
import FormCara from "../components/Form/FormCara";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";

export default function KelolaCaraPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Cara Peminjaman"></Judul>
            <FormCara></FormCara>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}