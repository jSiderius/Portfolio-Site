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
          This it the first paragraph in the about me section This it the first
          paragraph in the about me section This it the first paragraph in the
          about me section This it the first paragraph in the about me section
        </p>
        <p>
          This it the second paragraph in the about me section This it the first
          paragraph in the about me section This it the first paragraph in the
          about me section This it the first paragraph in the about me section
        </p>
        <p>
          This it the third paragraph in the about me section This it the first
          paragraph in the about me section This it the first paragraph in the
          about me section This it the first paragraph in the about me section
        </p>
      </div>
    </div>
  );
}
//  I
// have work experience with web development, AI & automation, data
// models, game development and more. I bring passion, skill, and
// dedication to every opportunity and always work to improve myself
// in the field.

function RightPanel() {
  return (
    <div className="about-me-right-panel">
      <div className="expertese-container card border-effect">
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
