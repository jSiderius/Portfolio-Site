import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../../data/ExperienceData";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

type ExperienceDataPanelProps = {
  selectedId: number;
};

export function ExperienceDataPanel(props: ExperienceDataPanelProps) {
  const motionDiv = useRef<HTMLDivElement>(null);

  const variants: Variants = {
    open: () => {
      const height = motionDiv.current ? motionDiv.current.scrollHeight : 600;
      return {
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: height / 600,
          ease: "easeIn" as const,
        },
      };
    },
    closed: () => {
      const height = motionDiv.current ? motionDiv.current.scrollHeight : 600;
      return {
        clipPath: "inset(0% 0% 100% 0%)",
        transition: {
          duration: height / 600,
          ease: "easeOut" as const,
        },
      };
    },
  };

  return (
    <AnimatePresence mode="wait">
      {props.selectedId !== null && props.selectedId !== undefined && (
        <motion.div
          layout
          ref={motionDiv}
          key={props.selectedId}
          className="height-toggle-container card experience-right-panel custom-border-effect"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <span className="border" />

          <h2>
            {experiences[props.selectedId].role} @{" "}
            {experiences[props.selectedId].company}
          </h2>

          <p className="experience-time-location-container">
            <span className="experience-time-location-bar">
              <FaCalendarAlt />
              {experiences[props.selectedId].timePeriod}
            </span>

            <span className="experience-time-location-bar">
              <FaMapMarkerAlt />
              {experiences[props.selectedId].workLocationType}
            </span>
          </p>

          <ul className="custom-list">
            {experiences[props.selectedId].resumeBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: ".5em" }}>
            {experiences[props.selectedId].keyProjects.length === 0
              ? ""
              : experiences[props.selectedId].keyProjects.length === 1
                ? "Key Project:"
                : "Key Projects"}
          </h4>

          <div className="key-projects-group-container">
            {experiences[props.selectedId].keyProjects.map((proj) => (
              <div key={proj.name} className="sub-card-textbox">
                <h5>{proj.name}</h5>
                <p>{proj.synopsis}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
