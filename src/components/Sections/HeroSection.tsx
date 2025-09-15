import "../../css/HeroSection.css";

function HeroSection() {
  return (
    <>
      {/* PNG of face */}
      <section className="vh-100 top-container">
        <div className="left-panel">
          <img className="headshot" src="/headshot.jpg"></img>
          {/* <img src="../../assets/headshot.jpg"></img> */}
        </div>
        <div className="right-panel">
          <div>
            <h2>Joshua Siderius</h2>
            <h5>Software Developer</h5>
            <p className="dev-objectives-paragraph">
              This is a paragraph about myself and my objectives as a developer
              This is a paragraph about myself and my objectives as a developer
              This is a paragraph about myself and my objectives as a developer
              This is a paragraph about myself and my objectives as a developer
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

        {/* <div className="d-flex justify-content-center gap-4 fs-1">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Download CV
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            Contact
          </a>
        </div> */}
      </section>
    </>
  );
}

export default HeroSection;
