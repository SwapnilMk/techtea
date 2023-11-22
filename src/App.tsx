import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import  Contact  from "./pages/ContactPage/Contact";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import PostPage from "./pages/PostPage/Post"

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
        <Route path="/PostPage" element={<PostPage/>} />
      </Routes>
    </>
  );
}

export default App;
