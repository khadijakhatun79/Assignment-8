import Image from "next/image";

const ProductDetailsPage = async ({ params }) => {
  const id = params.id;

  const res = await fetch("https://assignment-8-wheat.vercel.app/products.json");
  const products = await res.json();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={product.image}
          fill
          alt={product.name}
          className="object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-600">{product.description}</p>

        <p>⭐ {product.rating}</p>
        <p>Brand: {product.brand}</p>

        <p className="text-xl font-bold text-orange-500">
          ${product.price}
        </p>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;