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
          I am a developer who just loves to code! What matters to me is
          building projects with good design, learning from every opportunity,
          and putting care and dedication into my work.
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
      <div className="expertese-container card custom-border-effect">
        <span className="border"></span>
        <h2 style={{ textAlign: "center" }}>Core Expertise</h2>

        <div className="skill-bars-container">
          {expertise.map((item) => (
            <div className="skill-percentage-and-bar-container">
              <div className="skill-and-percentage-container">
                <p className="flexbox-push-right">{item.skill}</p>
                <p className="">{item.percentage}%</p>
              </div>

              <div className="percentage-bar-empty">
                <div
                  className="percentage-bar-full"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
