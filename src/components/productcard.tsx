// /src/components/productcard.tsx

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  addToCart?: () => void; // optional addToCart for Popular Products usage
  viewMoreLink?: string;  // added viewMoreLink as an optional prop
}

export default function ProductCard({ title, price, image, addToCart, viewMoreLink }: ProductCardProps) {
  return (
    <div className="w-80  h-auto p-6  border rounded-lg shadow-xl bg-white flex  flex-col items-center">
      <div className="w-full h-64 mb-4   overflow-hidden">
        <Image src={image} alt={title} width={320} height={256} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#27423a] font-medium mb-4">${price}</p>
      
      {/* Conditionally render "Add to Cart" or "View More" based on prop availability */}
      {addToCart ? (
        <button onClick={addToCart} className="bg-[#27423a] text-white py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      ) : viewMoreLink ? (
        <Link href={viewMoreLink} className="bg-[#27423a] text-white py-2 px-4 rounded mt-2">
          View More
        </Link>
      ) : null}
    </div>
  );
}
