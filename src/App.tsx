import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Experience from "./components/Sections/Experience";
import HeroSection from "./components/Sections/HeroSection";
import Projects from "./components/Sections/Projects";
// import Skills from "./components/Sections/Skills";

function App() {
  // return <div></div>;
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
