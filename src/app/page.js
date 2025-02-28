import Image from "next/image";
import image1 from "../../public/images/image1.png";
import image_iva from "../../public/images/image_iva.png";
import image_ky from "../../public/images/image_ky.png";
import image_logoIP from "../../public/images/image_logoIP.png";
import image_logol from "../../public/images/image_logol.png";
import { Marquee } from "@/components/magicui/marquee";
import countryside from "../../public/images/countryside.png";
import modern from "../../public/images/modern.png";
import modernapartment from "../../public/images/modernapartment.png";
import HiveHouse from "../../public/images/HiveHouse.png";
import image6 from "../../public/images/image6.png";
import { Accordion } from "@/components/ui/accordion";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div></div>

      <section className="flex justify-between items-center px-16 pt-1">
        <div className="flex flex-col justify-center">
          <h3 className="text-5xl text-black tracking-wide font-semibold py-10 pt-5">
            Discover a place <br /> you 'll love to live
          </h3>
        </div>

        <div className="flex flex-col justify-center py-3 pt-10 mt-3">
          <h1 className="text-gray-400 text-xm">
            Beautiful homes. Incredible Locations. <br /> Pricing that makes sense
          </h1>

          <div className="flex mt-4 space-x-4">
            {/* City Dropdown */}
            <Accordion title="Select City">
              <div className="px-0 mt-4">
                <label htmlFor="city" className="block text-xm text-gray-400">City</label>
                <select id="city" className="mt-2 border border-gray-400 rounded w-44 max-w-xs" defaultValue="Maharagama">
                  <option value="Maharagama">Maharagama</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Kandy">Kandy</option>
                </select>
              </div>
            </Accordion>

            {/* Type Dropdown */}
            <Accordion title="Select Type">
              <div className="px-0 mt-4">
                <label htmlFor="type" className="block text-xm text-gray-400">Type</label>
                <select id="type" className="mt-2 border border-gray-400 rounded w-44" defaultValue="Modern">
                  <option value="Modern">Modern</option>
                  <option value="Classic">Classic</option>
                </select>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Image 1 section */}
      <div className="flex justify-center py-10">
        <Image
          src={image1}
          alt="house"
          width={1159}
          height={1159}
          className=""
        />
      </div>

      <h1 className="text-gray-400 text-center py-7 font-semibold">Trusted by</h1>

      <Marquee className="your-custom-class" pauseOnHover>
        <Image src={image_iva} alt="Image 1" width={100} height={100} />
        <Image src={image_ky} alt="Image 2" width={100} height={100} />
        <Image src={image_logoIP} alt="Image 3" width={100} height={100} />
        <Image src={image_logol} alt="Image 4" width={100} height={100} />
      </Marquee>

      <section className="flex flex-col py-9 px-16">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl mt-3 text-black font-semibold">New homes <br /> in sale</h3>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-gray-400 text-xm mt-8">Explore a handpicked selection of homes for sale and find the perfect place to call <br /> your own. Start toward your dream home today!</h1>
            <div className="flex items-center text-black font-semibold text-xs py-3">
              <p className="mr-2 text-sm">View all homes</p>
              <GoArrowUpRight />
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col items-start">
            <Image src={modernapartment} alt="modernapartment" width={600} height={800} />
            <p className="text-black font-bold">Modern Apartment</p>
            <p className="text-gray-400 text-sm">No. 25, Galle Road, Colombo 03, Sri Lanka</p>
            <p className="text-black font-semibold text-sm">Modern</p>
          </div>
          <div className="flex flex-col items-start">
            <Image src={countryside} alt="countryside" width={600} height={800} />
            <p className="text-black font-bold">Country Style House</p>
            <p className="text-gray-400 text-xs">145/7, Kandy Road, Peradeniya, Sri Lanka</p>
            <p className="text-black font-semibold text-sm">Country / Modern</p>
          </div>

          <div className="flex flex-col items-start">
            <Image src={modern} alt="modern" width={600} height={800} />
            <p className="text-black font-bold">Modern 2 Sto. House</p>
            <p className="text-gray-400 text-xs">36A, Beachside Avenue, Galle, Sri Lanka</p>
            <p className="text-black font-semibold text-sm">Modern</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-16 px-16">
        <div className="flex justify-between items-start mb-4">
          {/* Image on the left */}
          <Image src={HiveHouse} alt="HiveHouse" width={2500} height={386} />

          {/* Text content on the right, aligned properly */}
          <div className="flex flex-col justify-start ml-7 w-full">
            <div className="flex items-center">
              <div className="w-65 h-0.5 bg-black mr-3"></div>
              <h1 className="text-xs font-semibold">Available now</h1>
            </div>

            <h3 className="text-4xl font-bold text-center py-5">Hive House</h3>
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
            <p className="max-w-lg mt-7">
              Spacious 5-bedroom, 6-bathroom home featuring modern interiors, an open-plan living area, and a private garden. Perfect for comfort and entertaining!
            </p>

            {/* "See Home" Button with Icon */}
            <div className="flex items-center text-black font-semibold text-xs py-5">
              <p className="mr-2">See home</p>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </section>

      <div className="my-3">
        <div className="flex items-center">
          <hr className="border-black w-1/3 ml-50" />
          <p className="mx-2 text-4xl ">We only feature the top performing</p>
        </div>
        <div className="flex items-center">
          <p className="mx-2 text-4xl ml-16">homes and verified manufactures.</p>
          <hr className="border-black w-1/2" />
        </div>
      </div>

      <section className="flex items-start py-4 px-16">
        <div className="flex flex-col mr-4">
          <p className="text-4xl mb-2 py-7">
            Expertise <br /> and passion, on measure
          </p>
          <p className="mb-4 text-xs space-x-2 text-justify leading-loose">
            From humble beginnings to a trusted name, our <br /> journey has been built on passion, dedication, and a commitment to <br /> excellence. Over the years, we have grown with a vision to provide <br /> exceptional service, creating lasting relationships with our clients and <br /> communities. With a strong foundation and a forward-thinking <br /> approach, we continue to evolve, embracing innovation while staying <br /> true to our core values.
          </p>
        </div>
        <Image 
          src={image6}
          alt="image6"
          width={500}
          height={500} 
          className="py-4 px-4 ml-54"
        />
      </section>

      <h1 className="text-center font-semibold text-2xl py-8">Articles</h1>

      <Marquee className="your-custom-class" pauseOnHover>
       
        <ul>
          <li className="mx-4">Your Bathroom</li>
        </ul>
        <ul>
          <li className="mx-4 text-gray-400">July 03, 2025</li>
        </ul>
        <ul>
          <li className="mx-4 text-gray-400">Bathroom Trends You`ll Want To Incorporate in Your BAthrom</li>
        </ul>


      </Marquee>
      
    </div>
  );
}
