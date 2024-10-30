'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const LivingroomPage = () => {
    const livingroomDesigns = [
        { id: 1, price: 5000, imageUrl: '/images/livingroom-imgs/lr1.jpg' },
        { id: 2, price: 7500, imageUrl: '/images/livingroom-imgs/lr2.jpg' },
        { id: 3, price: 6200, imageUrl: '/images/livingroom-imgs/lr3.jpg' },
        { id: 4, price: 4800, imageUrl: '/images/livingroom-imgs/lr4.jpg' },
        { id: 5, price: 9000, imageUrl: '/images/livingroom-imgs/lr5.jpg' },
        { id: 6, price: 8500, imageUrl: '/images/livingroom-imgs/lr6.jpg'},
    ];

    const [cart, setCart] = useState<number[]>(Array(livingroomDesigns.length).fill(0));

    const handleAddToCart = (index: number) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            updatedCart[index] += 1;
            return updatedCart;
        });
    };

    return (
        <div className="p-8 flex flex-col items-center">
            <h2 className="text-5xl animate-bounce-once text-white bg-[#27423a] rounded-lg p-5 font-bold text-center mb-6">Livingroom Furniture</h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <Link className="border-2 border-[#27423a] text-[#27423a] text-lg hover:bg-[#27423a] hover:text-white px-4 py-2 rounded" href="/bedroom">Bed Room Furniture</Link>
                <Link className="border-2 border-[#27423a] text-[#27423a] text-lg hover:bg-[#27423a] hover:text-white px-4 py-2 rounded" href="/living">Living Room Furniture</Link>
            </div>

            <p className="text-center text-xl mb-8 max-w-3xl"> Elevate your dining experience with our beautifully crafted dining furniture, designed to combine elegance and functionality. Each piece is made from high-quality materials, adding a touch of sophistication to family meals and gatherings, ensuring comfort and style in every detail..</p>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-10">
                {livingroomDesigns.map((design, index) => (
                    <div key={design.id} className="border-2 bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between h-full">
                        <a href={design.imageUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={design.imageUrl}
                                alt={`Design ${design.id}`}
                                width={300}
                                height={200}
                                className="rounded-md object-cover w-full h-64"  // Set a consistent height
                            />
                        </a>
                        <div className="text-center mt-4">
                            <h3 className="text-lg text-[#27423a] font-semibold">Design No {design.id}</h3>
                            <p className="text-[#27423a] mt-2">Price: ${design.price}</p>
                            <button
                                onClick={() => handleAddToCart(index)}
                                className="mt-4 bg-[#27423a] text-white px-4 py-2 rounded"
                            >
                                Add to Cart
                            </button>

                            {cart[index] > 0 && (
                                <div className="mt-2">
                                    <p className="text-sm text-[#27423a]">Quantity: {cart[index]}</p>
                                    <Link href="/order" className="border-2 border-[#27423a] text-[#27423a] text-sm hover:bg-[#27423a] hover:text-white px-4 py-2 rounded inline-block mt-2">
                                        View Items in Cart
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LivingroomPage;