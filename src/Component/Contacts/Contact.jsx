import React, { useRef } from 'react'
import './Contact.css'
import linkedin from '../../assets/linkedin.png'
import Github from '../../assets/Github.png'
import instagram from '../../assets/instagram.png'
import ux from '../../assets/ux.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dnz0wfi', 'template_sh7nq27', form.current, {
        publicKey: 'oNs0th-t5lL_IgsLg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div className="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesk">Please fill out the form below to discuss any further work opportunities</span>
        <form  className="contactForm" ref={form}  onSubmit={sendEmail}>
            <input type="text" placeholder='Your organisation name or your name' className='name' name='from_name' />
            <input type="email" className='email' placeholder='Your email' name='from_email'/>
            <textarea className='msg' name="message" id="" rows="5" placeholder='Your message'  ></textarea>
            <button className="submitBtn" type='submit' value='send'>Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/aman-singh-46b782273">
                <img src={linkedin} alt="linkedin" className='link'  />
                </a>
                <a href="https://github.com/Amasingh9910"><img src={Github} alt="github" className='link'/></a>
                <img src={instagram} alt="instagram" className='link'/>
                <a href="https://blogsite-orcin.vercel.app/"><img src={ux} alt="ux" className='link'/></a>
                
            </div>
        </form>
    </div>
    </section>
  )
}

export default Contact
