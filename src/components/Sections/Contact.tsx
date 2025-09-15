import "../../css/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-top-container">
        <h1 className="experience-header">Let's Connect</h1>
        <UserInputPanel />
        <div className="contact-socials-container">
          <div className="d-flex justify-content-flex-start gap-4 fs-1">
            <img className="icon" src="Icons/Python.svg" alt="" />
            <img className="icon" src="Icons/React.svg" alt="" />
            <img className="icon" src="Icons/JavaScript.svg" alt="" />
            <img className="icon" src="Icons/CSharp.svg" alt="" />
            <img className="icon" src="Icons/CPlusPlus.svg" alt="" />
            <img className="icon" src="Icons/Database.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

function UserInputPanel() {
  return (
    <div className="contact-user-input-panel">
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
