import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import Container from "../components/Container";
import Content from "../components/Content";
import Judul from "../components/Judul";
import SimpleCard from "../components/SimpleCard";
import { dataRuangDetail } from "../data/data";

export default function DashboardPage() {
  return (
    <>
      <Container>
        <SidebarProvider>
          <Sidebar></Sidebar>
          <Content>
            <Judul judul="Dashboard"></Judul>
            <SimpleCard dataCard={dataRuangDetail}></SimpleCard>
          </Content>
        </SidebarProvider>
      </Container>
    </>
  );
}