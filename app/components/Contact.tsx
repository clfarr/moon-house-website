export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-moon-teal mb-12">
          Visit Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-moon-teal mb-4">Location</h3>
              <p className="text-lg text-gray-700">
                30891 State HWY 3<br />
                Weaverville, CA<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-moon-teal mb-4">Contact</h3>
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong>{' '}
                <a href="tel:530-784-0408" className="text-moon-teal-light hover:underline">
                  530-784-0408
                </a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:moonhousetrinity@gmail.com" className="text-moon-teal-light hover:underline">
                  moonhousetrinity@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-moon-teal mb-4">Hours</h3>
              <p className="text-lg text-gray-700">
                Check our social media for current hours
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-moon-teal mb-4">What We Offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Board Game Cafe
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full Organic Coffee Bar
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Local Organic Produce
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rice & Quinoa Bowls
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Moon Pitas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moon-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Protein Waffles (Sweet & Savory)
                </li>
              </ul>
            </div>
          </div>

          {/* Map placeholder - in production, use Google Maps embed */}
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=30891+State+HWY+3,+Weaverville,+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-3 px-6 rounded-full transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
