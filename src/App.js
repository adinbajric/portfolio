import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
