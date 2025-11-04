'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/about/Moon House Building outside.jpg"
        alt="Moon House Building"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.5)',
          zIndex: 0
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <img
            src="/images/Moon House Logo.jpg"
            alt="Moon House Logo"
            width={200}
            height={200}
            className="mx-auto rounded-full shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Moon House
        </h1>
        <p className="text-2xl md:text-3xl text-moon-yellow mb-4 font-semibold">
          Coffee, Games & Grub
        </p>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Board game cafe in Weaverville, CA serving local organic produce filled bowls,
          Moon Pitas, protein waffles & full organic coffee bar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#order"
            className="bg-moon-yellow hover:bg-moon-yellow-dark text-moon-teal-dark font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            Order Now
          </a>
          <a
            href="#gallery"
            className="bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            View Menu
          </a>
          <a
            href="tel:530-784-0408"
            className="bg-white hover:bg-gray-100 text-moon-teal font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            Call: 530-784-0408
          </a>
        </div>
        <div className="mt-12">
          <p className="text-lg">
            <span className="font-semibold">NOW OPEN!</span>
          </p>
          <p className="text-lg">
            30891 State HWY 3, Weaverville, CA
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#gallery">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
