import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactOption from "./ContactOption";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qkgjue7",
      "template_68553wr",
      form.current,
      "e6zH9wUmUL5yTALW3"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            id={1}
            Icons={MdOutlineEmail}
            heading1="Email"
            heading2="suryatomar303@gmail.com"
            sendLink="mailto:suryatomar303@gmail.com"
            anchorText="Send a mail"
          />
          <ContactOption
            id={2}
            Icons={BsWhatsapp}
            heading1="Whatsapp"
            heading2="+91-7706964417"
            sendLink="https://api.whatsapp.com/send?phone=7706964417"
            anchorText="WhatsApp me"
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
