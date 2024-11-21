'use client'
import Image from "next/image";
import Link from "next/link";
import { API } from "@/services/API";
import { useEffect, useState } from "react";
import FirstComponent from "@/Component/MainAllPage/MainHomePage/FirstComponent/FirstComponet";
import SecondComponent from "@/Component/MainAllPage/MainHomePage/SecondComponent/SecondComponent";
import ComponentMain3 from "@/Component/MainAllPage/MainHomePage/3thComponent/3thComponent";
import ComponentMain4 from "@/Component/MainAllPage/MainHomePage/4thComponent/4thComponent";
import ComponentMain5 from "@/Component/MainAllPage/MainHomePage/5thComponent/ComponentMain5";
import ComponentMain6 from "@/Component/MainAllPage/MainHomePage/6thComponent/ComponentMain6";
import ComponentMain7 from "@/Component/MainAllPage/MainHomePage/7thComponent/ComponentMain7";
import ComponentMain8 from "@/Component/MainAllPage/MainHomePage/8thComponent/ComponentMain8";
import ComponentMain9 from "@/Component/MainAllPage/MainHomePage/9thComponent/ComponentMain9";
import ComponentMain10 from "@/Component/MainAllPage/MainHomePage/10thComponent/ComponentMain10";

const HomePage = () => {
  const [sharedData, setSharedData] = useState("");
  return (
      <main className="container padding-62 container-md" id="main">
        {/* Phần Main-1 */}
        <FirstComponent APIdata={API} setSharedData={setSharedData}/>
        {/* Phần Main-2 */}
        <SecondComponent APIdata = {API} currentIndex={sharedData || 0} />
        {/* Phần Main-3 */}
        <ComponentMain3 APIdata = {API}/>
        {/* Phần Main-4 */}
        <ComponentMain4 APIdata = {API}/>
        {/* Phần Main-5 */}
        <ComponentMain5 />
        {/* Phần Main-6 */}
        <ComponentMain6 APIdata = {API.HotSellingProducts}/>
        {/* Phần Main-7 */}
        <ComponentMain7 APIdata = {API} currentIndex={sharedData || 0}/>
        {/* Phần Main-8 */}
        <ComponentMain8 />
        {/* Phần Main-9 */}
        <ComponentMain9 APIdata = {API}/>
        {/* Phần Main-10 */}
        <ComponentMain10 />
      </main>
  )
}

export default HomePage
