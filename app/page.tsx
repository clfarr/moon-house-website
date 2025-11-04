import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />

        {/* Quick Links Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-moon-teal mb-8 sm:mb-12">
              Explore Moon House
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/about" className="group">
                <div className="bg-moon-cream hover:bg-moon-teal transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal group-hover:text-white transition mb-3">
                    About Us
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition">
                    Meet Tristan, Kate, and the family behind this beloved mountain town cafe
                  </p>
                </div>
              </Link>

              <Link href="/gallery" className="group">
                <div className="bg-moon-cream hover:bg-moon-teal transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal group-hover:text-white transition mb-3">
                    Food Gallery
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition">
                    Check out our delicious Moon Pitas, bowls, waffles, and more
                  </p>
                </div>
              </Link>

              <Link href="/order" className="group">
                <div className="bg-moon-cream hover:bg-moon-teal transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal group-hover:text-white transition mb-3">
                    Order Online
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition">
                    Browse our menu and place an order for pickup
                  </p>
                </div>
              </Link>

              <Link href="/rewards" className="group">
                <div className="bg-moon-cream hover:bg-moon-teal transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal group-hover:text-white transition mb-3">
                    Rewards Program
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition">
                    Earn points with every drink purchase and get free rewards
                  </p>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="bg-moon-cream hover:bg-moon-teal transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal group-hover:text-white transition mb-3">
                    Visit Us
                  </h3>
                  <p className="text-gray-700 group-hover:text-white transition">
                    Find us in Weaverville, CA. Hours, directions, and contact info
                  </p>
                </div>
              </Link>

              <a href="tel:530-784-0408" className="group">
                <div className="bg-moon-yellow hover:bg-moon-yellow-dark transition p-6 sm:p-8 rounded-lg shadow-lg h-full">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-moon-teal-dark mb-3">
                    Call Us Now
                  </h3>
                  <p className="text-moon-teal-dark font-semibold text-lg">
                    530-784-0408
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-moon-teal to-moon-teal-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              What Makes Us Special
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-4">🎲</div>
                <h3 className="text-xl font-bold mb-2">Board Games</h3>
                <p>Hundreds of games to play with friends and family</p>
              </div>
              <div>
                <div className="text-5xl mb-4">☕</div>
                <h3 className="text-xl font-bold mb-2">Organic Coffee</h3>
                <p>Full espresso bar with locally roasted beans</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2">Local & Fresh</h3>
                <p>Organic produce from local farms</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
