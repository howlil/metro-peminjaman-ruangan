import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-16  lg:px-24">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
