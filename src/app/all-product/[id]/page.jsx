import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://assignment-8-wheat.vercel.app/products.json')
    const products = await res.json()

    const product = products.find(p => p.id == id)

   

    return (
         <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-4">
          
          <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 mb-4 inline-block rounded-full">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-600">
            {product.description}
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <p>⭐ {product.rating}</p>
            <p>🏷 {product.brand}</p>
            <p>📦 Stock: {product.stock}</p>
          </div>

          <h2 className="text-2xl font-bold text-orange-500">
            ${product.price}
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>

            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION (ThemeForest feel) */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-4">
          Related Information
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl">
            🚚 Free Delivery
          </div>
          <div className="p-4 border rounded-xl">
            🔄 7 Days Return
          </div>
          <div className="p-4 border rounded-xl">
            🔐 Secure Payment
          </div>
        </div>
      </div>
    </div>
    );
};

export default PhotoDetailsPage;