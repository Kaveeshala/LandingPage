import Artcles from "./components/Artcles";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Homes from "./components/Homes";
import HomeDescription from "./components/HomeDescription";
import Goal from "./components/Goal";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div></div>

      <h1 className="text-gray-400 text-center py-7 font-semibold">Trusted by</h1>

      <Clients />

      <Homes />

      <HomeDescription />

      <div className ="py-12">
        <div className="flex items-center">
          <hr className="border-black w-1/3 ml-15" />
          <p className="mx-1 text-5xl space-x-8">We only feature the top performing</p>
        </div>
        <div className="flex items-center">
          <p className="mx-2 text-5xl ml-16">homes and verified manufactures.</p>
          <hr className="border-black w-1/3 mt-4 mr-2" />
        </div>
      </div>

      <Goal />

      <Artcles /> {/* Moved inside the main div */}
    </div> 
  );
}
