export function AboutMeTextPanel() {
  return (
    <div className="about-me-left-panel">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <div className="about-me-text">
          <p>
            I enjoy programming as a blend of creativity, logic, and
            problem-solving. With 6 years of experience, I’ve worked on
            AI-focused projects, game development, and data-driven challenges.
            Currently, I’m building personal projects while learning React to
            strengthen my web development skills.
          </p>
          <p>
            In my free time I spend time with friends and family, walk my dog
            Palmer, cook, code, play chess, and stay active with basketball. I
            value strong community and love contributing to a positive team.
          </p>
          <p>
            I am currently based in Ottawa, ON, and I'm open to opportunities
            locally or in the GTA (with relocation). Feel free to reach out to
            me{" "}
            <a href="#contact-form" className="contact-link">
              here
            </a>
            ; I would love to discuss how I can contribute to your team or
            project.
          </p>
        </div>
      </div>
    </div>
  );
}
