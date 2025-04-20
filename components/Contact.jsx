"use client";
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef, useState} from "react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        'service_k12zy0q', // Replace with your EmailJS service ID
        'template_4kns5p6', // Replace with your EmailJS template ID
        form.current,
        'fcH9gi0X8f5kDF8h7' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          form.current.reset(); // Clear form
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div className="w-full h-fit px-[40px] py-20 md:py-20 max-xs:px-[20px] relative bg-white" id="contact">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Contact Info Section */}
          <div>
            <div className="inline-block">
              <p className="section-title mb-10">
                <span className="mb-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                  </svg>
                </span>
                Contact Me!
              </p>
              </div>
            <p className="text-dark-blue">
              Feel free to reach out. I'm always open to new opportunities and projects.
            </p>
            <p className="text-dark-blue mt-12">Email Me!</p>
            <h4>
              <a href="mailto:rajeshraj8558@gmail.com" className="text-lg font-semibold text-dark-blue hover:underline">
                rajeshraj8558@gmail.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <a
                    href="https://github.com/RajeshKumark2"
                    className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajeshkumar1907?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/rajesh.19021/?hl=en"
                    className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://wa.me/+91 8248190818" // Replace "yourphonenumber" with your actual WhatsApp number in international format (e.g., 919876543210 for India)
                    className="text-3xl text-dark-blue hover:text-dark-green transition-all duration-300 transform hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* Contact Form Section */}
          <div>
            <form onSubmit={sendEmail} ref={form} className="w-full">
              <div className="grid grid-cols-1 gap-6">
                {/* Name Input */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full text-gray-700 bg-gray-100 border border-slate-300 rounded-xl py-3 px-5 mb-4 leading-tight shadow-lg hover:shadow-xl focus:outline-none focus:border-dark-white focus:ring-2 focus:ring-dark-white transition-all duration-300 transform hover:scale-105"
                />
                {/* Email Input */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full text-gray-700 bg-gray-100 border border-slate-300 rounded-xl py-3 px-5 mb-4 leading-tight shadow-lg hover:shadow-xl focus:outline-none focus:border-dark-white focus:ring-2 focus:ring-dark-white transition-all duration-300 transform hover:scale-105"
                />
                {/* Subject Input */}
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full text-gray-700 bg-gray-100 border border-slate-300 rounded-xl py-3 px-5 mb-4 leading-tight shadow-lg hover:shadow-xl focus:outline-none focus:border-dark-white focus:ring-2 focus:ring-dark-white transition-all duration-300 transform hover:scale-105"
                />
                {/* Message Textarea */}
                <textarea
                  className="w-full text-gray-700 bg-gray-100 border border-slate-300 rounded-xl py-3 px-5 mb-4 leading-tight shadow-lg hover:shadow-xl focus:outline-none focus:border-dark-white focus:ring-2 focus:ring-dark-white transition-all duration-300 transform hover:scale-105"
                  id="message"
                  name="message"
                  rows="7"
                  style={{ resize: "none" }}
                  placeholder="Message"
                />
              </div>
              <div className="flex justify-end">
                {/* Submit Button */}
               
               
                <button type="submit" disabled={loading}
                  className="py-3 px-8 font-semibold text-white bg-gradient-to-r from-dark-red to-red-600 hover:from-red-600 hover:to-dark-red rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                {loading ? "Sending..." : "Submit"}
                  </button>
              </div>
            </form>
            {sent && <p style={{ color: "green" }}>Message sent successfully!</p>}
            {error && <p style={{ color: "red" }}>Failed to send message. Try again.</p>} 
          </div>
        </div>
      </div>
      <div>
             <h6><p style={{
              bottom:'20px',
              left:'50px',
              right:'50px',
              transform:'translateX(-50)',
              textAlign: 'center',
              width:'100%',
              color:'#666'
             }}>@ Copyright! <br />@2025 RajeshKumar. All rights reserved</p></h6> 
            </div>
    </div>
  );
};
export default Contact;
