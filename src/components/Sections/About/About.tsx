import "../../../css/AboutMe.css";
import "../../../css/Gallery.css";
import { AboutMeTextPanel } from "./AboutMeTextPanel";
import { PhotoGalleryPanel } from "./PhotoGalleryPanel";

export default function About() {
  return (
    <section className="about-me-top-container">
      <div
        style={{
          width: "35%",
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <h2 className="experience-header about-me-header">About Me</h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <AboutMeTextPanel />
        <PhotoGalleryPanel />
      </div>
    </section>
  );
}
