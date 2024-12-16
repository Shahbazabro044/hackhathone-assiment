
import FeauterProducts, {  MainFeauter,  } from "@/components/Feauter";
import MainFooter from "@/components/Footer";
import TopHeader, { MiddleHeader } from "@/components/Header";
import Mainhero from "@/components/Hero";

import OurProduct, { FeaturedProducts, TopCategory } from "@/components/Product";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  return (
   <div>
    <TopHeader/>
    <MiddleHeader/>
    <div className="bg-[#FFFFFFFF] w-[1516px] h-[74px] flex items-center justify-between px-6">
  <div className="flex space-x-6">
    <Link className='text-[#007580]'href="">Home</Link>
    <Link href="">Shop</Link>
    <Link href="/components">Product</Link>

    <Link href="">Page</Link>
    <Link href="">About</Link>
  </div>
  <span>Contact: (201829138921)</span>
</div>
<Mainhero/>
<MainFeauter/>
<FeaturedProducts/>
<TopCategory/>
<OurProduct/>
<MainFooter/>


</div>

  );
}

