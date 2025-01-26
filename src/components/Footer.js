import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#063363] text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} HKBU MUN. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/hkbumun.hk?igsh=cXI3c25ncTcxZGhw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/hkbu-model-united-nations-club/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
          href="mailto:hkbumunclub@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          <FaEnvelope size={24} />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
