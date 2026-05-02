import ProductCard from "./ProductCard";

const Products = async () => {
  const res = await fetch('http://localhost:3000/products.json', {
    cache: "no-store",
  });

  const products = await res.json();
  const topProducts = products.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-32">
      <h1 className="text-2xl font-bold my-8">🔥 Popular Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;