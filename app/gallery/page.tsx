import Navigation from '../components/Navigation';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gallery - Moon House',
  description: 'View our delicious food creations - Moon Pitas, bowls, waffles and more',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <Gallery />
      <Footer />
    </>
  );
}
