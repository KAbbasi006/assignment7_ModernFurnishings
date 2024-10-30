// /src/app/page.tsx
import Image from 'next/image';
import PopularProducts from '../components/popularproduct';

export default function HomePage() {
  return (
    <div>
     

<div className="relative flex items-center justify-center h-[50vh] sm:h-[70vh] md:h-screen bg-gray-100">
  <Image
    src="/images/home-image.jpg"
    alt="Modern Sofa"
    fill
    sizes="(max-width: 640px) 100vw, (min-width: 641px) 100vw"
    className="object-cover object-center w-full h-full"
  />
  <div className="animate-bounce-once absolute text-center text-white px-4 sm:px-0">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Modern Furnishing</h1>
    <p className="text-md sm:text-xl md:text-2xl ">Stylish and Comfortable</p>
  </div>
</div>



      {/* Popular Products Section */}
      <PopularProducts />
    </div>
  );
}
