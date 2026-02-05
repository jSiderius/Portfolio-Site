import "../../css/HeroSection.css";
import grad from "@/assets/Images/Photos/grad.jpg";

function HeroSection() {
  return (
    <>
      {/* PNG of face */}
      <section className="hero-container">
        <div className="left-panel">
          <div className="headshot-container custom-border-effect">
            <span className="border thick"></span>
            <img className="headshot" src={grad}></img>
          </div>
        </div>

        <div className="right-panel">
          <div className="right-panel-inner">
            <h2>Joshua Siderius</h2>
            <h5>Software Developer</h5>
            <p className="dev-objectives-paragraph">
              I am a developer who just loves to code! What matters to me is
              building projects with good design, learning from every
              opportunity, and putting care and dedication into my work.
            </p>
            <div className="icon-container">
              <img className="icon" src="Icons/Python.svg" alt="" />
              <img className="icon" src="Icons/React.svg" alt="" />
              <img className="icon" src="Icons/JavaScript.svg" alt="" />
              <img className="icon" src="Icons/CSharp.svg" alt="" />
              <img className="icon" src="Icons/CPlusPlus.svg" alt="" />
              <img className="icon" src="Icons/Database.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
