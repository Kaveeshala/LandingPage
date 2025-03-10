import Artcles from "./components/Artcles";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Homes from "./components/Homes";
import HomeDescription from "./components/HomeDescription";
import Goal from "./components/Goal";
import { Separator } from "@/components/ui/separator"; // Import the Separator component

export default function Home() {
  return (
    <div>
      
      <HeroSection />

      <h1 className="text-gray-400 text-center font-semibold mt-24">Trusted by</h1>
      <Clients />

      <Homes />

      <HomeDescription />

      <div className="max-w-7xl mx-auto mt-24">
         <div className="flex flex-col w-full"> 
            <div className="flex items-center w-2/5 gap-2">
                <Separator className="flex-grow h-[2px] bg-black" /> 
                <h1 className="whitespace-nowrap tracking-wide text-5xl">We only feature the top performing</h1> 
           </div>
          </div>

          <div className="flex flex-col gap-2 w-full"> 
            <div className="flex items-center w-2/5 gap-6">
            <h1 className="whitespace-nowrap tracking-wide text-5xl">homes and verified manufactures </h1> 
                <Separator className="flex-grow h-[2px] bg-black" />      
           </div>
          </div>
      </div>

      <Goal />

      <Artcles />
    </div>
  );
}