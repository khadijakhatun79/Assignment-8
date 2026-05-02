import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://assignment-8-rho-two.vercel.app/category.json",{
    cache: "no-store", 
  }); 
  const products = await res.json();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
   <div></div>
  );
};

export default Category;