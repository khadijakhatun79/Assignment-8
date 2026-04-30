"use client";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Card className="border rounded-xl p-3 hover:shadow-lg transition">
      
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
                src={product.image} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={"Product"}
                className="object-cover rounded-xl"
                />

        <Chip size="sm" className="absolute right-2 top-2 bg-orange-500 text-white">
          {product.category}
        </Chip>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h2 className="font-semibold text-sm">{product.name}</h2>

        <p className="text-xs text-gray-500">
          ⭐ {product.rating}
        </p>

        <p className="font-bold text-orange-500">
          ${product.price}
        </p>
      </div>

      {/* Button */}
      <Link href={`/products/${product.id}`}>
        <Button className="w-full mt-3 bg-orange-500 text-white">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;