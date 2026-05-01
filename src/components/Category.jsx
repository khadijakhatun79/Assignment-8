import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://assignment-8-wheat.vercel.app/products.json");
  const products = await res.json();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {categories.map((cat) => (
        <Link key={cat} href={`?category=${cat.toLowerCase()}`}>
          <button className="px-4 py-1 border rounded-full hover:bg-orange-500 hover:text-white transition">
            {cat}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;