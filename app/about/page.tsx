import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us - Moon House',
  description: 'Meet the owners of Moon House, a beloved board game cafe in Weaverville, CA',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-moon-cream">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-moon-teal to-moon-teal-dark text-white py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              About Moon House
            </h1>
            <p className="text-xl sm:text-2xl text-moon-yellow mb-4">
              A Labor of Love in Weaverville
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              More than just a cafe - we're a gathering place for our mountain community
              where good food, great coffee, and board games bring people together.
            </p>
          </div>
        </section>

        {/* Owners Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-moon-teal mb-8 sm:mb-12">
              Meet Tristan & Kate
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/images/about/Moon House Owners Tristan and Kate.jpg"
                  alt="Tristan and Kate, owners of Moon House"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  className="sm:h-[500px]"
                />
              </div>

              <div className="flex flex-col justify-center bg-white rounded-lg shadow-xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-moon-teal mb-4">
                  Our Story
                </h3>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                  <p>
                    Tristan and Kate opened Moon House with a dream: to create a space where
                    the Weaverville community could come together over delicious, locally-sourced
                    food and friendly competition at the game table.
                  </p>
                  <p>
                    As lifelong board game enthusiasts and food lovers, they saw an opportunity
                    to combine their passions and create something special for our little mountain town.
                  </p>
                  <p>
                    Every dish is crafted with care using organic, local ingredients. Every coffee
                    is brewed with precision. And every game night brings new friends together.
                  </p>
                  <p className="font-semibold text-moon-teal">
                    This isn't just a business - it's their love letter to Weaverville.
                  </p>
                </div>
              </div>
            </div>

            {/* Family Photo */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="/images/about/Owners Family .jpg"
                  alt="Moon House family"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  className="sm:h-[500px]"
                />
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-moon-teal mb-4">
                    A Family Affair
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg mb-4">
                    Moon House is truly a family business. You'll often see the whole crew
                    working together to make sure every guest feels at home.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg">
                    From the kitchen to the game tables, everyone pitches in to create
                    the warm, welcoming atmosphere that makes Moon House special.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-moon-teal mb-8 sm:mb-12">
              What We Believe In
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-moon-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-moon-teal mb-3">🌱 Local & Organic</h3>
                <p className="text-gray-700">
                  We source our ingredients from local farms and use organic produce
                  whenever possible. Supporting our community while serving the best.
                </p>
              </div>

              <div className="bg-moon-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-moon-teal mb-3">🎲 Community First</h3>
                <p className="text-gray-700">
                  Moon House is more than a cafe - it's a gathering place where friendships
                  form over shared meals and friendly competition.
                </p>
              </div>

              <div className="bg-moon-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-moon-teal mb-3">☕ Quality Always</h3>
                <p className="text-gray-700">
                  From our full organic coffee bar to our handcrafted Moon Pitas,
                  we never compromise on quality.
                </p>
              </div>

              <div className="bg-moon-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-moon-teal mb-3">❤️ Made with Love</h3>
                <p className="text-gray-700">
                  Every dish, every drink, every detail is prepared with care and
                  genuine love for what we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-moon-teal to-moon-teal-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Come Visit Us!
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Whether you're here for the food, the coffee, the games, or the company -
              we can't wait to welcome you to our Moon House family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/order"
                className="bg-moon-yellow hover:bg-moon-yellow-dark active:bg-moon-yellow-dark text-moon-teal-dark font-bold py-4 px-8 text-lg rounded-full transition"
              >
                Order Now
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-100 active:bg-gray-100 text-moon-teal font-bold py-4 px-8 text-lg rounded-full transition"
              >
                Visit Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
