export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moon-teal-dark text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl font-bold text-moon-yellow mb-4">Moon House</h3>
            <p className="text-gray-300">
              Coffee, Games & Grub<br />
              Board game cafe in Weaverville, CA
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-moon-yellow mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-300 hover:text-white transition">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#rewards" className="text-gray-300 hover:text-white transition">
                  Rewards Program
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-moon-yellow mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>30891 State HWY 3</li>
              <li>Weaverville, CA</li>
              <li>
                <a href="tel:530-784-0408" className="hover:text-white transition">
                  530-784-0408
                </a>
              </li>
              <li>
                <a href="mailto:moonhousetrinity@gmail.com" className="hover:text-white transition">
                  moonhousetrinity@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-moon-teal pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Moon House. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with care in Weaverville, California
          </p>
        </div>
      </div>
    </footer>
  );
}
