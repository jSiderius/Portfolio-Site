import "../../css/HeroSection.css";

function HeroSection() {
  return (
    <>
      {/* PNG of face */}
      <section className="vh-100 top-container">
        <div className="left-panel">
          <div className="headshot-container">
            {/* <img className="headshot" src="/Images/Photos/on-horse.jpg"></img> */}
            {/* <img className="headshot" src="/Images/Photos/boat.jpg"></img> */}
            <img className="headshot" src="/Images/Photos/grad.jpg"></img>
            {/* <img className="headshot" src="/Images/Photos/palmer-adoption.jpg"></img> */}
            {/* <img className="headshot" src="/Images/Photos/palmer.jpg"></img> */}
            {/* <img className="headshot" src="/Images/Photos/silver-lake.jpg"></img> */}
          </div>
        </div>

        <div className="right-panel">
          <div>
            <h2>Joshua Siderius</h2>
            <h5>Software Developer</h5>
            <p className="dev-objectives-paragraph">
              I am a developer who just loves to code! What matters to me is
              building projects with good design, learning from every
              opportunity, and putting care and dedication into my work.
            </p>
            <div className="d-flex justify-content-flex-start gap-4 fs-1">
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
