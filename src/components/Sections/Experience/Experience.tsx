import "../../../css/Experience.css";
import { useState } from "react";
import { experiences } from "../../../data/ExperienceData";

import { ExperienceDataPanel } from "./ExperienceDataPanel";

export default function Experience() {
  const [experienceType, setExperienceType] = useState<string>("Professional");
  const [page, setPage] = useState<number>(0);
  const selectedId = experiences.some((e) => e.id == page) ? page : 0;

  function LeftPanel() {
    return (
      <div className="experience-left-panel">
        {experiences.map(
          (exp) =>
            exp.type === experienceType && (
              <button
                key={exp.id}
                onClick={() => {
                  if (exp.role === "Academic Experience") {
                    setExperienceType("Academic");
                    if (exp.referenceId !== null) setPage(exp.referenceId);
                    return;
                  }
                  if (exp.role === "Professional Experience") {
                    setExperienceType("Professional");
                    if (exp.referenceId !== null) setPage(exp.referenceId);
                    return;
                  }
                  setPage(exp.id);
                }}
                className={`experience-button card ${
                  selectedId === exp.id ? "active custom-border-effect" : ""
                }`}
              >
                {exp.role}
              </button>
            ),
        )}
        {/* <AnimatePresence>
          {experiences.map(
            (exp, i) =>
              exp.type === experienceType && (
                <motion.button
                  key={exp.id}
                  onClick={() => {
                    if (exp.role === "Academic Experience") {
                      setExperienceType("Academic");
                      return;
                    }
                    if (exp.role === "Professional Experience") {
                      setExperienceType("Professional");
                      return;
                    }
                    setSelectedId(exp.id);
                    // setSelectedId(null);
                  }}
                  className={`experience-button card ${
                    selected?.id === exp.id ? "active custom-border-effect" : ""
                  }`}
                  initial={
                    // datasetChangeRef.current ? { y: -50, opacity: 0 } : false
                    false
                  }
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    // duration: (0.8 * (experiences.length - i)) / dataset.length,
                    duration: 0,
                    ease: "easeOut",
                  }}
                  layout
                >
                  {exp.role}
                </motion.button>
              )
          )}
        </AnimatePresence> */}
      </div>
    );
  }

  return (
    <section className="experience-top-container">
      <h1 className="experience-header">Experience</h1>
      <div className="experience-panel-container">
        <LeftPanel />
        <ExperienceDataPanel selectedId={selectedId} />
      </div>
    </section>
  );
}
