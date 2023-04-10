import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactOption from "./ContactOption";
import "./Contact.css";
import { useRef, useState } from "react";
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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    const res = fetch(
      "https://suryasinghss-bd90c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        },
      }
    );
    if (res) {
      setUserData({
        name: "",
        email: "",
        message: "",
      });
      alert("Message Sent.");
    } else {
      alert("Please add the data.");
    }
  };
  // const { name, email, message } = userData;
  //   if (name && email && message) {
  //     const response = fetch(
  //       "https://suryasinghss-bd90c-default-rtdb.firebaseio.com//SuryaSinghSS_DataRecords.json",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           message,
  //         }),
  //       }
  //     );
  //   if (response) {
  //     setUserData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //     alert("Message Sent.");
  //   }
  // } else {
  //   alert("Please add the data.");
  // }
  return (
    <section id="contact">
      <h5>Let's make something amazing together.</h5>
      <h2>Start by saying "hi".</h2>
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
        <form ref={form} onSubmit={sendEmail} method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={userData.name}
            onChange={postUserData}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userData.email}
            onChange={postUserData}
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            value={userData.message}
            onChange={postUserData}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitData}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
