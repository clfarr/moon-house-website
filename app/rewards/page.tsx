import Navigation from '../components/Navigation';
import Rewards from '../components/Rewards';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rewards Program - Moon House',
  description: 'Join Moon Rewards and earn free drinks with every purchase',
};

export default function RewardsPage() {
  return (
    <>
      <Navigation />
      <Rewards />
      <Footer />
    </>
  );
}
