"use client";

import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Card className="group border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image}
          fill
          alt={product.name}
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <Chip className="absolute top-3 left-3 bg-white/90 text-xs font-medium">
          {product.category}
        </Chip>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
          ⭐ {product.rating}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-base line-clamp-1">
          {product.name}
        </h2>

        <p className="text-xs text-gray-500">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>

        <p className="text-xs text-gray-500">
          Stock: {product.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </p>

        <div className="flex justify-between items-center pt-2">
          <p className="font-bold text-lg text-orange-500">
            ${product.price}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4"> 
        <Link href={`/products/${product.id}`}>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;