import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Order from './components/Order';
import Rewards from './components/Rewards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Order />
        <Rewards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
