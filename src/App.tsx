import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import About from "./pages/Aboutpage/About";
import  Contact  from "./pages/Contactpage/Contact";
import LoginPage from "./pages/Authpage/LoginPage";
import RegisterPage from "./pages/Authpage/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
