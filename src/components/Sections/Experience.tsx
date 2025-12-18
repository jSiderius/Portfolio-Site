import "../../css/Experience.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import type { ExperienceEntry } from "../../models/ExperienceEntry";
import { experiences, academicExperiences } from "../../data/ExperienceData";
import { motion, AnimatePresence } from "framer-motion";
import { select } from "framer-motion/client";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(
    experiences[0]
  );

  const [dataset, setDataset] = useState<ExperienceEntry[]>(experiences);

  const datasetChangeRef = useRef(false);

  function changeDataset(newDataset: ExperienceEntry[]) {
    datasetChangeRef.current = true;
    setDataset(newDataset);
    setSelected(newDataset[0]);
  }

  function LeftPanel() {
    return (
      <div className="experience-left-panel">
        <AnimatePresence>
          {dataset.map((exp, i) => (
            <motion.button
              key={exp.id}
              onClick={() => {
                if (exp.role === "Academic Experience") {
                  changeDataset(academicExperiences);
                  return;
                }
                if (exp.role === "Professional Experience") {
                  changeDataset(experiences);
                  return;
                }
                datasetChangeRef.current = false;
                setSelected(exp);
              }}
              className={`experience-button card ${
                selected?.id === exp.id ? "active custom-border-effect" : ""
              }`}
              initial={
                datasetChangeRef.current ? { y: -50, opacity: 0 } : false
              }
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: (0.8 * (dataset.length - i)) / dataset.length,
                ease: "easeOut",
              }}
              layout
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
      <div className="experience-right-panel card custom-border-effect">
        <span className="border"></span>
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
              {selected.resumeBullets.map((bullet, i) => (
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    duration:
                      (1.2 * (selected.resumeBullets.length - i)) /
                      selected.resumeBullets.length,
                    ease: "easeOut",
                  }}
                >
                  {bullet}
                </motion.li>
              ))}
            </ul>

            <h4 style={{ marginTop: ".5em" }}>
              {selected.keyProjects.length < 1
                ? ""
                : selected.keyProjects.length == 1
                ? "Key Project:"
                : "Key Projects"}
            </h4>
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
