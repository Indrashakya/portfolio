import { Route, Routes } from "react-router-dom";
import Footer from "./container/footer";
import Navbar from "./container/navbar";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
