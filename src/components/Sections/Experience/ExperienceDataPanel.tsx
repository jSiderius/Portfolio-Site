import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { experiences } from "../../../data/ExperienceData";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

type ExperienceDataPanelProps = {
  selectedId: number;
};

export function ExperienceDataPanel(props: ExperienceDataPanelProps) {
  const motionDiv = useRef<HTMLDivElement>(null);
  const [prevHeight, setPrevHeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!motionDiv.current) return;
    setPrevHeight(height);
    setHeight(motionDiv.current.scrollHeight);
    console.log(prevHeight, height);
    // console.log(motionDiv.current.offsetHeight);
  }, [props.selectedId]);

  const variants: Variants = {
    open: (h: number) => ({
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: h / 600,
        // duration: 1,
        ease: "linear",
      },
    }),
    closed: (h: number) => ({
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: h / 600,
        // duration: 1,
        ease: "linear",
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {props.selectedId !== null && props.selectedId !== undefined && (
        <motion.div
          ref={motionDiv}
          key={props.selectedId}
          className="height-toggle-container card experience-right-panel custom-border-effect"
          custom={height}
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
