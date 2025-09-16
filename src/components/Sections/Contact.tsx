import "../../css/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-top-container">
        <h1 className="experience-header">Let's Connect</h1>
        <UserInputPanel />
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

function UserInputPanel() {
  return (
    <div className="contact-user-input-panel border-effect">
      <div className="name-email-conatiner">
        <div className="contact-field-conatiner">
          <p>Name</p>
          <input type="text"></input>
        </div>
        <div className="contact-field-conatiner">
          <p>Email</p>
          <input type="text"></input>
        </div>
      </div>

      <div className="contact-field-conatiner">
        <p>Subject</p>
        <input type="text"></input>
      </div>

      <div className="contact-field-conatiner">
        <p>Message</p>
        <textarea
          className="message-field"
          rows={3}
          placeholder="Type your message..."
        ></textarea>
      </div>
    </div>
  );
}

export default Contact;
