import { useState } from "react";
import "../../css/Contact.css";

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
    <form
      onSubmit={onSubmit}
      className="contact-user-input-panel border-effect card"
    >
      <div className="name-email-conatiner">
        <div className="contact-field-conatiner">
          <p>Name</p>
          <input className="text-field" type="text" name="name" required />
        </div>

        <div className="contact-field-conatiner">
          <p>Email</p>
          <input className="text-field" type="text" name="email" required />
        </div>
      </div>

      <div className="contact-field-conatiner">
        <p>Subject</p>
        <input className="text-field" type="text" name="subject" />
      </div>

      <div className="contact-field-conatiner">
        <p>Message</p>
        <textarea
          className="message-field text-field"
          rows={3}
          placeholder="Type your message..."
          name="message"
          required
        />
      </div>

      <button className="submission-button" type="submit">
        Submit
      </button>
      <p>{result}</p>
    </form>
  );
}

export default Contact;
