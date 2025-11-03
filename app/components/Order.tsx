'use client';

import { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  category: 'pita' | 'bowl' | 'waffle' | 'soup' | 'coffee' | 'tea' | 'drink';
  price: number;
  description: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const menuItems: MenuItem[] = [
  // Moon Pitas
  { id: '1', name: 'Pesto Chicken Moon Pita', category: 'pita', price: 12.99, description: 'Grilled chicken with fresh pesto' },
  { id: '2', name: 'Hot Tri-Tip Moon Pita', category: 'pita', price: 13.99, description: 'Tender tri-tip with house sauce' },
  { id: '3', name: 'Wild Caught Salmon Pita', category: 'pita', price: 14.99, description: 'Fresh salmon with herbs' },
  { id: '4', name: 'BBQ Pulled Pork Pita', category: 'pita', price: 12.99, description: 'Slow-cooked BBQ pork' },
  { id: '5', name: 'Tuna Melt Moon Pita', category: 'pita', price: 11.99, description: 'Classic tuna melt' },
  { id: '6', name: 'Chicken Meatball Pita', category: 'pita', price: 12.99, description: 'Homemade chicken meatballs' },

  // Bowls
  { id: '7', name: 'Breakfast Bowl', category: 'bowl', price: 11.99, description: 'Quinoa, greens, and fresh veggies' },
  { id: '8', name: 'Quinoa Power Bowl', category: 'bowl', price: 12.99, description: 'Organic quinoa with local produce' },

  // Soups
  { id: '9', name: 'Veggie Venison Soup', category: 'soup', price: 9.99, description: 'Hearty venison and vegetables' },

  // Waffles
  { id: '10', name: 'GF/DF Biscuits & Gravy', category: 'waffle', price: 10.99, description: 'Gluten & dairy free' },
  { id: '11', name: 'Protein Waffle', category: 'waffle', price: 9.99, description: 'Sweet or savory options' },

  // Drinks
  { id: '12', name: 'Organic Coffee', category: 'coffee', price: 4.50, description: 'Fresh brewed organic coffee' },
  { id: '13', name: 'Espresso', category: 'coffee', price: 3.50, description: 'Rich espresso shot' },
  { id: '14', name: 'Latte', category: 'coffee', price: 5.50, description: 'Smooth espresso with steamed milk' },
  { id: '15', name: 'Cappuccino', category: 'coffee', price: 5.50, description: 'Espresso with foam' },
  { id: '16', name: 'Organic Tea', category: 'tea', price: 3.99, description: 'Selection of organic teas' },
  { id: '17', name: 'Chai Latte', category: 'tea', price: 5.50, description: 'Spiced chai with milk' },
  { id: '18', name: 'Fresh Juice', category: 'drink', price: 6.99, description: 'Fresh squeezed juice' },
  { id: '19', name: 'Smoothie', category: 'drink', price: 7.99, description: 'Blended fruit smoothie' },
];

export default function Order() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', notes: '' });

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'pita', label: 'Moon Pitas' },
    { id: 'bowl', label: 'Bowls' },
    { id: 'waffle', label: 'Waffles' },
    { id: 'soup', label: 'Soups' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'tea', label: 'Tea' },
    { id: 'drink', label: 'Drinks' },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderDetails = {
      items: cart,
      customer: customerInfo,
      total: cartTotal,
      timestamp: new Date().toISOString(),
    };

    // In production, this would send to a backend
    console.log('Order submitted:', orderDetails);
    alert(`Thank you ${customerInfo.name}! Your order for $${cartTotal.toFixed(2)} has been received. We'll call you at ${customerInfo.phone} when it's ready!`);

    // Reset
    setCart([]);
    setCustomerInfo({ name: '', phone: '', notes: '' });
    setShowCart(false);
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-moon-teal mb-4">
          Order Online
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Browse our menu and place your order for pickup
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === category.id
                  ? 'bg-moon-teal text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredItems.map(item => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-moon-teal mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-moon-teal-dark">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-moon-yellow hover:bg-moon-yellow-dark text-moon-teal-dark font-bold py-2 px-6 rounded-full transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-8 right-8 z-30">
            <button
              onClick={() => setShowCart(true)}
              className="bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-2"
            >
              <span>View Cart ({cart.length})</span>
              <span className="bg-moon-yellow text-moon-teal-dark px-3 py-1 rounded-full">
                ${cartTotal.toFixed(2)}
              </span>
            </button>
          </div>
        )}

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-moon-teal">Your Order</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-3xl text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>

              <div className="p-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b">
                    <div className="flex-1">
                      <h4 className="font-bold text-moon-teal">{item.name}</h4>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="text-right mb-6">
                  <p className="text-2xl font-bold text-moon-teal">
                    Total: ${cartTotal.toFixed(2)}
                  </p>
                </div>

                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moon-teal"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moon-teal"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Special Instructions (Optional)</label>
                    <textarea
                      value={customerInfo.notes}
                      onChange={e => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moon-teal"
                      rows={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-moon-teal hover:bg-moon-teal-dark text-white font-bold py-4 rounded-full transition"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
