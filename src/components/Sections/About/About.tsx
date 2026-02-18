import "../../../css/AboutMe.css";
import "../../../css/Gallery.css";
import { AboutMeTextPanel } from "./AboutMeTextPanel";
import { PhotoGalleryPanel } from "./PhotoGalleryPanel";

export default function About() {
  return (
    <section className="about-me-top-container">
      <h2 className="section-header about-me-header">About Me</h2>

      <div className="about-me-content-container">
        <AboutMeTextPanel />
        <PhotoGalleryPanel />
      </div>
    </section>
  );
}
