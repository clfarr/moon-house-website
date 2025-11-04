'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <img
            src="/images/Moon House Logo.jpg"
            alt="Moon House Logo"
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-2xl sm:w-[200px] sm:h-[200px]"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4">
          Moon House
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-moon-yellow mb-3 sm:mb-4 font-semibold">
          Coffee, Games & Grub
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2">
          Board game cafe in Weaverville, CA serving local organic produce filled bowls,
          Moon Pitas, protein waffles & full organic coffee bar!
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
          <Link
            href="/order"
            className="w-full sm:w-auto bg-moon-yellow hover:bg-moon-yellow-dark text-moon-teal-dark font-bold py-4 px-10 text-lg rounded-full transition shadow-lg active:scale-95 text-center"
          >
            Order Now
          </Link>
          <Link
            href="/gallery"
            className="w-full sm:w-auto bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-4 px-10 text-lg rounded-full transition shadow-lg active:scale-95 text-center"
          >
            View Gallery
          </Link>
          <a
            href="tel:530-784-0408"
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-moon-teal font-bold py-4 px-10 text-lg rounded-full transition shadow-lg active:scale-95 text-center"
          >
            📞 Call Us
          </a>
        </div>
        <div className="mt-8 sm:mt-12">
          <p className="text-base sm:text-lg font-semibold text-moon-yellow mb-1">
            NOW OPEN!
          </p>
          <p className="text-sm sm:text-base">
            30891 State HWY 3, Weaverville, CA
          </p>
        </div>
      </div>

    </section>
  );
}
