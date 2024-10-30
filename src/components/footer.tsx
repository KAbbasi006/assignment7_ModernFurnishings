// src/components/Footer.tsx

import { FaFacebook, FaInstagram, FaGoogle, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#27423a] text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-4">Follow us on:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaGoogle />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaTwitter />
          </a>
        </div>
        <p>Copyright &copy; All rights reserved | This website is made with love by Modern Furnishings</p>
      </div>
    </footer>
  );
}
