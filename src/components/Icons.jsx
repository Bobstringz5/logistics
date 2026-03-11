import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const Icons = () => {
  const phoneNumber = "2348023927736"
  return (
    <div className="flex gap-6 text-3xl justify-center items-center mt-10 mb-7">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:scale-110 transition duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Phone Call */}
      <a
        href="tel:+2348023927736"
        className="text-blue-500 hover:scale-110 transition duration-300"
      >
        <FaPhone />
      </a>

      {/* Email */}
      <a
        href="mailto:Israelibeabuchi904@gmail.com"
        className="text-red-500 hover:scale-110 transition duration-300"
      >
        <FaEnvelope />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/bobstringz5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:scale-110 transition duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
};

export default Icons;
