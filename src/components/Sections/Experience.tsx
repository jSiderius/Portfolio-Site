import "../../css/Experience.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import type { ExperienceEntry } from "../../models/ExperienceEntry";
import { experiences, academicExperiences } from "../../data/ExperienceData";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(
    experiences[0]
  );

  const [dataset, setDataset] = useState<ExperienceEntry[]>(experiences);

  function LeftPanel() {
    return (
      <div className="experience-left-panel">
        <AnimatePresence>
          {dataset.map((exp) => (
            <motion.button
              key={exp.id}
              onClick={() => {
                if (exp.role === "Academic Experience") {
                  setDataset(academicExperiences);
                  setSelected(academicExperiences[0]);
                  return;
                }
                if (exp.role === "Professional Experience") {
                  setDataset(experiences);
                  setSelected(experiences[0]);
                  return;
                }
                setSelected(exp);
              }}
              className={`experience-button card ${
                selected?.id === exp.id
                  ? "active border-effect border-effect-small"
                  : ""
              }`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 1.0, ease: "linear" }}
            >
              {exp.role}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  function RightPanel() {
    return (
      <div className="experience-right-panel card border-effect">
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
                <div className="sub-card-textbox">
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
    <section className="experience-top-container">
      <h1 className="experience-header">Experience</h1>
      <div className="experience-panel-container">
        <LeftPanel />
        <RightPanel />
      </div>
    </section>
  );
}
