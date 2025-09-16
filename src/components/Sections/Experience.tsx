import "../../css/Experience.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import type { ExperienceEntry } from "../../models/ExperienceEntry";
import { experiences } from "../../data/ExperienceData";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(
    experiences[0]
  );

  function LeftPanel() {
    return (
      <div className="experience-left-panel">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setSelected(exp)}
            className={`experience-button ${
              selected?.id === exp.id
                ? "active border-effect border-effect-small"
                : ""
            }`}
          >
            {exp.role}
          </button>
        ))}
      </div>
    );
  }

  function RightPanel() {
    return (
      <div className="experience-right-panel border-effect">
        {selected && (
          <>
            <h2>
              {selected.role} @ {selected.company}
            </h2>

            <p className="experience-time-location-container">
              <span className="experience-time-location-bar">
                <FaCalendarAlt />
                {selected.timePeriod}
              </span>

              <span className="experience-time-location-bar">
                <FaMapMarkerAlt />
                {selected.workLocationType}
              </span>
            </p>

            <ul className="custom-list">
              {selected.resumeBullets.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>

            <h4 style={{ marginTop: ".5em" }}>Key Projects:</h4>
            <div className="key-projects-group-container">
              {selected.keyProjects.map((proj) => (
                <div className="key-projects-item-container">
                  <h5>{proj.name}</h5>
                  <p>{proj.synopsis}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <section className="experience-top-container">
        <h1 className="experience-header">Experience</h1>
        <div className="experience-panel-container">
          <LeftPanel />
          <RightPanel />
        </div>
      </section>
    </>
  );
}
