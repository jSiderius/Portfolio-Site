import { useState } from "react";
import "../../../css/Contact.css";
import "../../../css/Input.css";
import "../../../css/CustomBorderEffect.css";
import { GlowBox } from "./GlowBox";

function Contact() {
  return (
    <>
      <section className="contact-top-container">
        <h1 className="experience-header">Let's Connect</h1>
        <UserInputForm />
        <div className="contact-socials-container">
          <div className="d-flex justify-content-flex-start gap-4 fs-1">
            <a href="https://github.com/jSiderius">
              <img className="icon" src="Icons/Github.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/joshua-siderius-0697a11a3/">
              <img className="icon" src="Icons/LinkedIn.svg" alt="" />
            </a>
            <a href="mailto:jsiderius0@gmail.com">
              <img className="icon" src="Icons/Gmail.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function UserInputForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3a99d9ed-4e5e-471e-a899-aae3d65b09c8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="form-container">
      <div className="form-inner">
        <div className="form-front">
          <GlowBox />
          <span className="envelope-centerline"></span>
        </div>
        <div className="form-back">
          <form
            id="contact-form"
            onSubmit={onSubmit}
            // className="custom-border-effect contact-user-input-panel"
            className="form"
            style={{ width: "80%" }}
          >
            {/* <span className="border thick"></span> */}
            <div className="name-email-conatiner">
              <label className="custom-field two">
                <input type="text" name="name" placeholder="" required />
                <span className="placeholder">Name</span>
                {/* <span className="border"></span> */}
              </label>

              <label className="custom-field two">
                <input type="text" name="email" placeholder="" required />
                <span className="placeholder">Email</span>
                {/* <span className="border"></span> */}
              </label>
            </div>

            <label className="custom-field two">
              <input type="text" name="subject" placeholder="" />
              <span className="placeholder">Subject</span>
              {/* <span className="border"></span> */}
            </label>

            <label className="custom-field one">
              <textarea
                // className=""
                placeholder=""
                rows={4}
                name="message"
                required
              />
              <span className="placeholder">Message</span>
              {/* <span className="border"></span> */}
            </label>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="custom-border-effect submission-button"
                type="submit"
              >
                Submit{" "}
              </button>
            </div>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
