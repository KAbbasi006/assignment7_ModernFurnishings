
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-[#27423a]  font-bold text-xl shadow-md ">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Logo Wrapper */}
        <div className="relative h-28 flex items-center">
          <Image
            src={'/images/logo.png'}
            alt='logo'
            width={250} // Increase this value to make the logo wider
            height={80} // Adjust height as needed
            className="object-contain" // Maintain the aspect ratio
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden  md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/cart">Order Now</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#27423a] text-white p-4 flex flex-col space-y-2">
          <Link href="/" onClick={toggleMenu} className="py-2">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="py-2">About Us</Link>
          <Link href="/contact" onClick={toggleMenu} className="py-2">Contact Us</Link>
          <Link href="/cart" onClick={toggleMenu} className="py-2">Order Now</Link>
        </nav>
      )}
    </header>
  );
}
