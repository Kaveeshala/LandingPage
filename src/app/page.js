import Image from "next/image";

import HiveHouse from "../../public/images/HiveHouse.png";
import image6 from "../../public/images/image6.png";
import { Accordion } from "@/components/ui/accordion";
import { GoArrowUpRight } from "react-icons/go";
import Artcles from "./components/Artcles";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Homes from "./components/Homes";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}

      <HeroSection />
      <div></div>



      
      <h1 className="text-gray-400 text-center py-7 font-semibold">Trusted by</h1>

      <Clients />

      <Homes />

      

      <section className="flex flex-col py-16 px-16">
        <div className="flex justify-between items-start mb-4">
          {/* Image on the left */}
          <Image src={HiveHouse} alt="HiveHouse" width={2100} height={300} />

          {/* Text content on the right, aligned properly */}
          <div className="flex flex-col justify-start ml-7 w-full">
            <div className="flex items-center">
              <div className="w-65 h-0.5 bg-black mr-3"></div>
              <h1 className="text-xs font-semibold">Available now</h1>
            </div>

            <h3 className="text-5xl font-semibold text-center py-5">Hive House</h3>
            <p className="text-gray-400 py-2">10/2, Lake View Gardens, Nuwara Eliya, Sri Lanka</p>

            {/* Bedroom, Bath, and Sq Ft Details */}
            <div className="flex space-x-30">
              <div className="flex flex-col items-center ">
                <p className="text-gray-400 mt-2">beds</p>
                <p className="mt-3">5</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 mt-2">bath</p>
                <p className="mt-3">6</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-400 mt-2">sq ft</p>
                <p className="mt-3">2340</p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-lg mt-7 text-sm justify-end text-gray-400">
              Spacious 5-bedroom, 6-bathroom home featuring modern interiors, an open-plan living area, and a private garden. Perfect for comfort and entertaining!
            </p>

            {/* "See Home" Button with Icon */}
            <div className="flex items-center text-black font-semibold text-xs py-16">
              <p className="mr-2 text-xl">See home</p>
              <GoArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </section>

      <div className="my-3 py-1">
        <div className="flex items-center">
          <hr className="border-black w-1/3 ml-15" />
          <p className="mx-1 text-5xl space-x-8">We only feature the top performing</p>
        </div>
        <div className="flex items-center">
          <p className="mx-2 text-5xl ml-16">homes and verified manufactures.</p>
          <hr className="border-black w-1/3 mt-4 mr-2" />
        </div>
      </div>

       
      <section className="flex items-start py-4 px-16">
  {/* Text Content */}
  <div className="flex flex-col mr-8 max-w-lg">
  <p className="text-5xl mb-8 mt-5 py-2">
      Expertise and<br /> passion, on measure
    </p>
    <p className="mb-6 text-xs text-justify leading-loose">
   <span className="float-right w-full text-right indent-0">From humble beginnings to a trusted name, our</span>
   <br /> <span className="float-right w-full text-justify indent-0">journey has been built on passion, dedication, and a commitment to</span>
   <br /> <span className="float-right w-full text-justify indent-0">excellence. Over the years, we have grown with a vision to provide</span>
   <br /> <span className="float-right w-full text-justify indent-0">exceptional service, creating lasting relationships with our clients and</span>
   <br /> <span className="float-right w-full text-justify indent-0">communities. With a strong foundation and a forward-thinking</span>
   <br /> <span className="float-right w-full text-justify indent-0">approach, we continue to evolve, embracing innovation while staying</span>
   <br /> <span className="float-left indent-0">true to our core values.</span>
</p>
<div className="flex items-center text-black font-semibold text-xs py-16">
            <p className="mr-2 text-xl">Our history</p>
            <GoArrowUpRight size={18} />
</div>

  </div>

  {/* Image with Increased Size */}
  <Image 
    src={image6}
    alt="image6"
    width={600}   // Increased width
    height={700}  // Increased height
    className="ml-8 object-cover"
  />
</section>


      {/* Article */}

      <Artcles />
      
    </div>
  );
}
