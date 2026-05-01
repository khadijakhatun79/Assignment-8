import Category from "@/components/Category";
import ProductCard from "@/components/ProductCard";

const AllProductPage = async ({ searchParams }) => {
  const category = searchParams?.category;

  const res = await fetch("https://assignment-8-wheat.vercel.app/products.json");
  const products = await res.json();

  const filteredProduct = category
    ? products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4">

      <h1 className="text-2xl font-bold my-5">All Products</h1>

      <Category />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default AllProductPage;