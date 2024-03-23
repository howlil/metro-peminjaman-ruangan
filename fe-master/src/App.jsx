import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "@/users/pages/beranda/beranda";
import NotFound from "./NotFound";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
