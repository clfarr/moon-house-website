'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-moon-teal text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/images/Moon House Logo.jpg"
              alt="Moon House Logo"
              width={50}
              height={50}
              className="rounded-full sm:w-[60px] sm:h-[60px]"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold">Moon House</h1>
              <p className="text-xs sm:text-sm text-moon-yellow">Coffee, Games & Grub</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#home" className="hover:text-moon-yellow transition">
              Home
            </a>
            <a href="#gallery" className="hover:text-moon-yellow transition">
              Gallery
            </a>
            <a href="#order" className="hover:text-moon-yellow transition">
              Order
            </a>
            <a href="#rewards" className="hover:text-moon-yellow transition">
              Rewards
            </a>
            <a href="#contact" className="hover:text-moon-yellow transition">
              Contact
            </a>
          </div>

          {/* Mobile menu button - larger touch target */}
          <button
            className="md:hidden text-white p-3 -mr-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - larger touch targets */}
      {isMenuOpen && (
        <div className="md:hidden bg-moon-teal-dark">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <a
              href="#home"
              className="block px-4 py-4 text-lg hover:bg-moon-teal-light rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block px-4 py-4 text-lg hover:bg-moon-teal-light rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#order"
              className="block px-4 py-4 text-lg hover:bg-moon-teal-light rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </a>
            <a
              href="#rewards"
              className="block px-4 py-4 text-lg hover:bg-moon-teal-light rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </a>
            <a
              href="#contact"
              className="block px-4 py-4 text-lg hover:bg-moon-teal-light rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
