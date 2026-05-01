import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://assignment-8-wheat.vercel.app/category.json");
  const products = await res.json();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
   <div></div>
  );
};

export default Category;