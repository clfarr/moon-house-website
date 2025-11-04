import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us - Moon House',
  description: 'Visit Moon House at 30891 State HWY 3, Weaverville, CA. Call us at 530-784-0408',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <Contact />
      <Footer />
    </>
  );
}
