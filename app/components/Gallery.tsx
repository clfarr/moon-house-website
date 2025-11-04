'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const foodImages: GalleryImage[] = [
  { src: '/images/food/breakfast bowl.jpg', alt: 'Breakfast Bowl' },
  { src: '/images/food/Pesto Chicken Moon Pita.jpg', alt: 'Pesto Chicken Moon Pita' },
  { src: '/images/food/Hot tri-tip moon pita.jpg', alt: 'Hot Tri-Tip Moon Pita' },
  { src: '/images/food/wild caught salmon moon pitas.jpg', alt: 'Wild Caught Salmon Moon Pitas' },
  { src: '/images/food/bbq pulled pork moon pitas.jpg', alt: 'BBQ Pulled Pork Moon Pitas' },
  { src: '/images/food/tuna melt moon pita.jpg', alt: 'Tuna Melt Moon Pita' },
  { src: '/images/food/chicken meatball moon pita.jpg', alt: 'Chicken Meatball Moon Pita' },
  { src: '/images/food/veggie venison soup.jpg', alt: 'Veggie Venison Soup' },
  { src: '/images/food/Gluten free & dairy free biscuits and gravy.jpg', alt: 'Gluten Free & Dairy Free Biscuits and Gravy' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-moon-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-moon-teal mb-4">
          Our Delicious Creations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Made with local organic produce, our menu features rice & quinoa bowls,
          Moon Pitas, protein waffles & more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-moon-yellow"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black bg-opacity-50 px-6 py-2 rounded">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
