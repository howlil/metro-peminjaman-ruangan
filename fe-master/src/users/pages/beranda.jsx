import Ruangan from "@/users/components/sections/beranda/Ruangan";
import Hero from "@/users/components/sections/beranda/Hero";
import Layout from "@/users/components/Layout";
import AlurPinjam from "@/users/components/sections/beranda/AlurPinjam";

export default function BerandaPage() {
  return (
    <Layout>
      <Hero />
      <Ruangan />
      <AlurPinjam/>
    
    </Layout>
  );
}
