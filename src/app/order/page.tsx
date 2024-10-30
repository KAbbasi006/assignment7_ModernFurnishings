
'use client';
import { useState } from 'react';

const OrderPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBuyNow = () => {
    setShowForm(true); // Show the form when "Buy Now" is clicked
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold animate-bounce-once text-[#27423a] mb-4">Order Now</h2>

      <p className="text-lg text-gray-700 mb-6">
        Your items are ready for review! Proceed with your order or visit our showroom.
      </p>

      <div className="flex gap-6">
        <button onClick={handleBuyNow} className="bg-green-600 text-white px-6 py-2 rounded">
          Buy Now
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
         <a href="/contact#visit"> Visit Showroom</a>
        </button>
      </div>

      {/* Display form when "Buy Now" is clicked */}
      {showForm && (
        <div className="mt-8 border-[#27423a] border-2 rounded-lg p-6 max-w-md w-full bg-white">
          <h3 className="text-2xl font-semibold text-[#27423a] mb-4">Contact Information</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border-b-2 text-[#27423a] border-[#27423a]" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border-b-2 text-[#27423a] border-[#27423a]" />
            <input type="text" placeholder="Contact Number" className="w-full p-2 border-b-2 text-[#27423a] border-[#27423a]" />
            <textarea placeholder="Address" className="w-full p-2 border-b-2 text-[#27423a] border-[#27423a]" rows={3}></textarea>
            <button type="submit" className="w-full bg-[#27423a] text-white py-2 rounded">
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
