'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="p-8">
      {/* Page Heading */}
      <h2 className="text-5xl font-bold animate-bounce-once text-center text-[#27423a] mb-8">About Us</h2>

      {/* Centered Content Wrapper */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/about-image.jpg"
            width={400}    // Set a fixed width
            height={300}   // Set a proportional height to control image shape
            alt="About Us"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center p-4">
          <p className="text-xl text-gray-700">
            Discover unparalleled craftsmanship and superior quality furniture from
            the best manufacturers in the industry. Welcome home to a world of
            elegance and functionality, where every item is a masterpiece in itself.
          </p>
        </div>
      </div>

      {/* Explore Our Latest Products Section */}
      <div className="mt-12">
        <h3 className="text-3xl animate-bounce-once font-semibold text-center text-[#27423a] mb-4">Explore Our Latest Products</h3>

        {/* Description */}
        <p className="text-center text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Discover our range of stylish and durable furniture that brings comfort, functionality, and elegance to every space in your home.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/bedroom" className="bg-[#27423a] text-white px-6 py-3 rounded text-center">
            Bedroom Set
          </Link>
          <Link href="/dining" className="bg-[#27423a] text-white px-6 py-3 rounded text-center">
            Dining Room Set
          </Link>
          <Link href="/living" className="bg-[#27423a] text-white px-6 py-3 rounded text-center">
            Living Room Set
          </Link>
        </div>
      </div>
    </div>
  );
}
