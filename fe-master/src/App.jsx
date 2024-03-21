import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "@/users/pages/beranda/beranda";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/beranda" element={<Beranda />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
