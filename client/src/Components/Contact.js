import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setMessage(""); // Clear message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage("Email accepted.");
    } else {
      setMessage("Please enter a valid gmail address.");
    }
  };

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading1">Any Questions?</h1>
      <h1 className="primary-headings">Let Us Help You</h1>
      
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="yourmail@gmail.com"
            value={email}
            onChange={handleInputChange}
          />
          <button type="submit" className="secondary-button-con">
            Submit
          </button>
        </form>
      </div>
      {/* Display the message outside of the form */}
      {message && <p className={message.includes("valid") ? "error-message" : "success-message"}>{message}</p>}
    </div>
  );
};

export default Contact;
