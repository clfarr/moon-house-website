import Navigation from '../components/Navigation';
import Order from '../components/Order';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Order Online - Moon House',
  description: 'Order food and drinks for pickup from Moon House',
};

export default function OrderPage() {
  return (
    <>
      <Navigation />
      <Order />
      <Footer />
    </>
  );
}
