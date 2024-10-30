import ProductCard from './productcard';

export default function PopularProducts() {
  const products = [
    { id: 1, title: 'Minimal Bed', price: 1000, image: '/images/bedroom-imgs/bd1.jpg', category: 'bedroom' },
    { id: 2, title: 'Dining Table', price: 120, image: '/images/diningroom-imgs/dr1.jpg', category: 'dining' },
    { id: 3, title: 'Living Room Sofa', price: 120, image: '/images/livingroom-imgs/lr1.jpg', category: 'living' },
  ];

  return (
    <section className="p-8">
      <h2  data-aos="flip-right" className="text-5xl font-bold hover:animate-bounce-once text-center mb-14">Popular Products</h2>
      <p className='mx-[10%] text-lg'> Discover our popular furniture range designed to elevate every space in your home. For the bedroom, our pieces bring warmth and sophistication, offering a peaceful, inviting atmosphere. The dining room collection combines style with practicality, perfect for gatherings with modern tables and comfortable seating. Our living room furniture is crafted for relaxation, with cozy sofas and stylish coffee tables, ensuring a welcoming, stylish setup for any occasion. Each piece in our collection blends seamlessly, transforming your home into a comfortable, stylish haven.</p><br /><br />
      <div className="flex flex-wrap justify-center gap-4 md:gap-12"
>
        {products.map((product) => (
          <div key={product.id} className="text-center  text-[#27423a] flex justify-center">
            <ProductCard 
              id={product.id}               
              title={product.title} 
              price={product.price} 
              image={product.image} 
              viewMoreLink={`/${product.category}`} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

