import "../../css/Experience.css";
import { useState } from "react";
import type { ExperienceEntry } from "../../models/ExperienceEntry";
import { experiences } from "../../data/ExperienceData";

function Experience() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(
    experiences[0]
  );
  return (
    <>
      <ExperienceHeader />
      <section className="experience-top-container">
        <div className="experience-left-panel">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelected(exp)}
              className={`experience-button ${
                selected?.id === exp.id ? "active" : ""
              }`}
            >
              {exp.role}
            </button>
          ))}
        </div>
        <div className="experience-right-panel">
          {selected && (
            <>
              <h2>
                {selected.role} @ {selected.company}
              </h2>
              <p>
                {selected.timePeriod} – {selected.workLocationType}
              </p>

              <ul>
                {selected.resumeBullets.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>

              <h3>Key Projects</h3>
              <ul>
                {/* {selected.keyProjects.map((proj, i) => (
                  <li key={i}>{proj}</li>
                ))} */}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function ExperienceHeader() {
  return (
    <>
      <h1 className="experience-header">Experience</h1>
    </>
  );
}

export default Experience;
