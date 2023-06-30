import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ConfettiExplosion from "react-confetti-explosion";



const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dvwk8er",
        "template_hxkbg0f",
        form.current,
        "uba1GJARJhZh3Xoqz"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
        },
        (error) => {}
      );
  };
  return (
    <div

      id="contact"
      className="max-w-screen-xl mx-auto px-8 py-16 text-center mt-28"
    >
      <h1 className="text-3xl md:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-mainFuchsia">
          Contact
        </span>
      </h1>

      <div className="space-y-4 mt-10">
        <div className="flex items-center space-x-5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <p>0716224608-phonenumber</p>
        </div>


        {/* <div className="flex items-center space-x-5 justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p>zwelihle408@gmail.com</p>
        </div> */}
        {isSubmitted ? (
          <div className="text-center">
            <ConfettiExplosion />
            <p className="text-2xl text-green-600">Thank you form sent!
            </p>
 
          </div>
        ) : (
          <div 
          >
            <form
              className="flex flex-col space-y-2 w-fit mx-auto sm:w-full sm:max-w-md text-gray-900 mt-10"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex space-x-2">
                <input
                  placeholder="Name"
                  type="text"
                  className="formInput w-1/2 h-8"
                  name="user_name"
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="formInput w-1/2 h-8"
                  name="user_email"
                  required
                />
              </div>
              <input
                placeholder="Subject...Job opportunity/Freelance work"
                type="text"
                className="formInput"
                name="user_subject"
                required
              />

              <textarea
                placeholder="Message"
                className="formInput"
                name="message"
                rows={4}
                required
              />

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70"></div>
                <button
                  className="relative w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-10 rounded-lg text-md text-white duration-200 ease-in-out hover:scale-105 "
                  type="submit"
                  value="Send"
                >
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
