import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import FormRuang from "../components/Form/FormRuang";

export default function TambahRuanganPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Ruangan"></Judul>
            <FormRuang></FormRuang>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}