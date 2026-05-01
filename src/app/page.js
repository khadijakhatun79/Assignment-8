import Banner from "@/components/Banner";
import Products from "@/components/Products";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
  <div>
   <Banner></Banner> 
   <Products></Products>
    <SummerCareTips />
      <TopBrands />
  </div>
   
  );
}
