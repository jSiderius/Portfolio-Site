import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact/Contact";
import Experience from "./components/Sections/Experience/Experience";
import HeroSection from "./components/Sections/HeroSection";
import Projects from "./components/Sections/Projects";

function App() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
