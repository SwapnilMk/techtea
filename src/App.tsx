import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "./pages/Homepage/Home";
import About from "./pages/Aboutpage/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
