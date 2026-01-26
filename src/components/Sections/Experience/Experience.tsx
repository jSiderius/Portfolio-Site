import "../../../css/Experience.css";
import { useRef, useState } from "react";
import { experiences } from "../../../data/ExperienceData";

import { ExperienceDataPanel } from "./ExperienceDataPanel";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [experienceType, setExperienceType] = useState<string>("Professional");
  const [page, setPage] = useState<number>(0);
  const selectedId = experiences.some((e) => e.id == page) ? page : 0;
  // const datasetChangeRef = useRef<boolean>

  function LeftPanel() {
    return (
      <div className="experience-left-panel">
        <AnimatePresence>
          {experiences.map(
            (exp, i) =>
              exp.type === experienceType && (
                <motion.button
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
                  // initial={{ x: -200, opacity: 0 }}
                  initial={false}
                  // animate={{ x: 0, opacity: 1 }}
                  // exit={{ x: 200, opacity: 0 }}
                  transition={
                    {
                      // duration:
                      // (0.8 * (experiences.length - i)) / experiences.length,
                      // duration: 2,
                      // ease: "easeOut",
                    }
                  }
                  layout
                >
                  {exp.role}
                </motion.button>
              ),
          )}
        </AnimatePresence>
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
