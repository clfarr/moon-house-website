'use client';

import { useState, useEffect } from 'react';

interface RewardsData {
  points: number;
  purchases: number;
  name: string;
  email: string;
}

export default function Rewards() {
  const [rewards, setRewards] = useState<RewardsData>({
    points: 0,
    purchases: 0,
    name: '',
    email: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    const savedRewards = localStorage.getItem('moonHouseRewards');
    if (savedRewards) {
      const data = JSON.parse(savedRewards);
      setRewards(data);
      setIsRegistered(true);
    }
  }, []);

  const saveRewards = (data: RewardsData) => {
    localStorage.setItem('moonHouseRewards', JSON.stringify(data));
    setRewards(data);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newRewards: RewardsData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      points: 0,
      purchases: 0,
    };
    saveRewards(newRewards);
    setIsRegistered(true);
    setShowRegisterForm(false);
  };

  const addPurchase = () => {
    const newRewards = {
      ...rewards,
      purchases: rewards.purchases + 1,
      points: rewards.points + 10,
    };
    saveRewards(newRewards);
  };

  const redeemReward = () => {
    if (rewards.points >= 100) {
      const newRewards = {
        ...rewards,
        points: rewards.points - 100,
      };
      saveRewards(newRewards);
      alert('Congratulations! You redeemed a free drink! Show this to our staff.');
    }
  };

  const freeItemsEarned = Math.floor(rewards.points / 100);
  const progressToNextReward = rewards.points % 100;

  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-moon-teal to-moon-teal-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Moon Rewards
        </h2>
        <p className="text-center text-moon-yellow mb-12 text-lg">
          Earn 10 points per coffee/tea/drink purchase. Get a FREE drink at 100 points!
        </p>

        {!isRegistered ? (
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
            {!showRegisterForm ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-moon-teal">
                  Join Moon Rewards Today!
                </h3>
                <p className="mb-6">
                  Start earning points on every coffee, tea, and drink purchase.
                </p>
                <button
                  onClick={() => setShowRegisterForm(true)}
                  className="bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-3 px-8 rounded-full transition"
                >
                  Sign Up Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-moon-teal">
                  Create Your Account
                </h3>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moon-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moon-teal"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-3 rounded-full transition"
                  >
                    Join Rewards
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegisterForm(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-full transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-moon-teal mb-2">
                Welcome back, {rewards.name}!
              </h3>
              <p className="text-gray-600">{rewards.email}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-moon-yellow to-moon-yellow-dark p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-moon-teal-dark">
                  {rewards.points}
                </div>
                <div className="text-moon-teal-dark font-semibold">
                  Total Points
                </div>
              </div>
              <div className="bg-gradient-to-br from-moon-teal to-moon-teal-light p-6 rounded-lg text-center text-white">
                <div className="text-4xl font-bold">{rewards.purchases}</div>
                <div className="font-semibold">Purchases</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Progress to next free drink
                </span>
                <span className="text-sm font-medium">
                  {progressToNextReward}/100 points
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-moon-yellow h-4 rounded-full transition-all duration-500"
                  style={{ width: `${progressToNextReward}%` }}
                ></div>
              </div>
            </div>

            {freeItemsEarned > 0 && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6 text-center">
                <p className="text-green-800 font-bold text-lg">
                  You have {freeItemsEarned} free drink{freeItemsEarned > 1 ? 's' : ''} available!
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={addPurchase}
                className="flex-1 bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-3 rounded-full transition"
              >
                Add Purchase (+10 pts)
              </button>
              <button
                onClick={redeemReward}
                disabled={rewards.points < 100}
                className={`flex-1 font-bold py-3 rounded-full transition ${
                  rewards.points >= 100
                    ? 'bg-moon-yellow hover:bg-moon-yellow-dark text-moon-teal-dark'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Redeem (100 pts)
              </button>
            </div>

            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset your rewards account?')) {
                  localStorage.removeItem('moonHouseRewards');
                  setRewards({ points: 0, purchases: 0, name: '', email: '' });
                  setIsRegistered(false);
                }
              }}
              className="w-full mt-4 text-sm text-red-600 hover:text-red-800 underline"
            >
              Reset Account
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
