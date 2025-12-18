import "../../css/AboutMe.css";

const expertise = [
  { skill: "skill 1", percentage: 95 },
  { skill: "skill 2", percentage: 85 },
  { skill: "skill 3", percentage: 75 },
  { skill: "skill 4", percentage: 65 },
  { skill: "skill 5", percentage: 55 },
];

export default function About() {
  return (
    <section className="about-me-top-container">
      <LeftPanel />
      <div className="about-me-center-panel"></div>
      <RightPanel />
    </section>
  );
}

function LeftPanel() {
  return (
    <div className="about-me-left-panel">
      <div className="about-me-text">
        <h2 className="experience-header">About Me</h2>
        <p>
          I enjoy programming as a blend of creativity, logic, and
          problem-solving. With 6 years of experience, I’ve worked on AI-focused
          projects, game development, and data-driven challenges. Currently, I’m
          building personal projects while learning React to strengthen my web
          development skills.
        </p>
        <p>
          In my free time I spend time with friends and family, walk my dog
          Palmer, cook, code, play chess, and stay active with basketball. I
          value strong community and love contributing to a positive team.
        </p>
        <p>
          I am currently based in Ottawa, ON, and I'm open to opportunities
          locally or in the GTA (with relocation). Feel free to reach out to me{" "}
          <a href="#contact-form" className="contact-link">
            here
          </a>
          ; I would love to discuss how I can contribute to your team or
          project.
        </p>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="about-me-right-panel">
      <div
        className="headshot-container custom-border-effect"
        style={{ marginTop: "25%" }}
      >
        <span className="border thick"></span>
        <img className="headshot" src="/Images/Photos/on-horse.jpg"></img>
        {/* <img className="headshot" src="/Images/Photos/boat.jpg"></img> */}
        {/* <img className="headshot" src="/Images/Photos/grad.jpg"></img> */}
        {/* <img className="headshot" src="/Images/Photos/palmer-adoption.jpg"></img> */}
        {/* <img className="headshot" src="/Images/Photos/palmer.jpg"></img> */}
        {/* <img className="headshot" src="/Images/Photos/silver-lake.jpg"></img> */}
      </div>
    </div>
  );
}
