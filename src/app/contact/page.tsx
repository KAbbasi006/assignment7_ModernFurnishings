'use client';
// import { useState } from 'react';

export default function ContactUs() {
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (   
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-4xl animate-bounce-once  font-bold text-center text-[#27423a] mb-8">Contact Us</h2>

      <form className="bg-white p-6 rounded-lg border-2 border-[#27423a] shadow-lg space-y-6">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full text-[#27423a] p-3 mt-2 border-b-2 focus:border-b-0 border-[#27423a]"
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full text-[#27423a] p-3 mt-2 border-b-2 focus:border-b-0 border-[#27423a]"
        />

        {/* Contact Number Field */}
        <input
          type="text"
          placeholder="Your Contact Number"
          className="w-full text-[#27423a] p-3 mt-2 border-b-2 focus:border-b-0 border-[#27423a]"
        />

        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full text-[#27423a] p-3 mt-2 border-b-2 focus:border-b-0 border-[#27423a]"
        ></textarea>

        {/* Address Field */}
        <textarea
          placeholder="Your Address"
          rows={3}
          className="w-full text-[#27423a] p-3 mt-2 border-b-2 focus:border-b-0 border-[#27423a]"
        ></textarea>

        {/* Payment Method */}
        <div>
          <label className="block text-lg font-medium text-[#27423a]">Payment Method</label>
          <div className="flex flex-wrap gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                // onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Cash on Delivery
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="credit"
                // onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="online"
                // onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Online Payment
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#27423a] w-full text-white px-6 py-3 rounded-lg text-lg"
          >
            Submit
          </button>
        </div>
      </form><br /><br />

      {/* Showroom Information Section */}
      <div className="bg-white animate-spin-once p-6 rounded-lg border-2 border-[#27423a] shadow-lg space-y-6">
      <h2 id="visit" className="text-3xl font-semibold text-center text-white p-4 rounded-lg bg-[#27423a] mb-8">Visit Our Showroom</h2>

        {/* Business Days and Visiting Hours */}
        <p className="text-[#27423a] mb-2">
          <strong>Business Days:</strong> Monday - Saturday
        </p>
        <p className="text-[#27423a] mb-2">
          <strong>Visiting Hours:</strong> 10:00 AM - 7:00 PM
        </p>

        {/* Address */}
        <p className="text-[#27423a] mb-2">
          <strong>Address:</strong> 123 Furniture Street, Furniture City, FC 12345
        </p>

        {/* Contact Number */}
        <p className="text-[#27423a] mb-2">
          <strong>Contact Info:</strong> (123) 456-7890 | email@example.com
        </p>
          {/* Email */}
          <p className="text-[#27423a] mb-2">
          <strong>Email:</strong> email@example.com
        </p>

        {/* Location */}
        <p className="text-[#27423a]">
          <strong>Location:</strong>
          <a href="https://www.google.com/maps" target="_blank" className="text-[#27423a] hover:bg-[#27423a] hover:text-white hover:p-2 hover:rounded  ml-1">View on Google Maps</a>
        </p>
      </div>
    </div>
  );
}
