import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dle9yc', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div
    className="h-screen flex flex-col 
    items-center justify-center"
  >
    <div className="mb-3 pt-0">
      <h3 className="text-center text-gray-400 text-s">Contact Us</h3>
    </div>
    <form ref={form} onSubmit={sendEmail}    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label >Name</label>
      <input   className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required type="text" placeholder="Name" name="user_name" />
      <label>Email</label>
      <input   className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required type="email" placeholder='Email' name="user_email" />
      <label>Message</label>
      <textarea  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required name="message" />
      <input     className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"    placeholder="text " type="submit" value="Send" />
    </form>
    </div>
  );
};
