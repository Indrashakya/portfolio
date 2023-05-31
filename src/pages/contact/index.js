import { Component, createRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import sendEmail from './sendEmail'
import Body from "../../container/body";

const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const sendMail = (e) => {
    e.preventDefault();
    sendEmail(
      name,
      email,
      message
    )
    setName('')
setEmail('')
setMessage('')

  }
  return (
    <Body>
      <section id="contact">
        <div className="container contact__container">
          <div className="contact__options">
            {/* <h2>Get In Touch</h2>
            <h2>Contact Me In</h2> */}
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>imshakya91@gmail.com</h5>
              <a href="mailto:imshakya91@gmail.com">Send a message</a>
            </div>
            <div className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>linkedin</h4>
              <h5>Indra Shakya</h5>
              <a href="https://www.linkedin.com/in/indra-s-2a83621a5/">Connect with me</a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+1 3127957909</h5>
              <a href="https://api.whatsapp.com/send?phone=13127857909">
                Send a message
              </a>
            </div>
          </div>

          <form onSubmit={sendMail} action="" className="contact_form">
            <h1>Contact me</h1>
            <div>
              <input
                type="text"
                name="name"
                placeholder=" Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              // required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder=" Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

              // required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="7"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}

                placeholder="Drop a message"
              // required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" >
              Send Message
            </button>
          </form>
        </div>

      </section>
    </Body>
  );
}

export default Contact;
