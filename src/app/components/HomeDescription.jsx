import Image from 'next/image';
import HiveHouse from '../../../public/images/HiveHouse.png';
import { GoArrowUpRight } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';

export default function HomeDescription() {
  return (
    <section className="max-w-7xl mx-auto">
      <Card className="w-full border-none shadow-none">
        <CardContent className="flex gap-8"> 

          {/* Image on the left side (60% width) */}
          <div className="flex-shrink-0 w-3/5">
            <Image 
              src={HiveHouse} 
              alt="HiveHouse"
              className="w-full h-auto" 
            />
          </div>

          {/* Description on the right side (40% width) */}
          <div className="flex flex-col gap-4 w-2/5"> 
            
            <div className="flex items-center gap-4 w-full">
              
              <div className="w-79"> 
                <Separator className="h-[2px] bg-black" />
              </div>
              <h1 className="text-lg font-semibold">Available now</h1>
            </div>
            
           
            <h1 className="text-5xl text-center font-semibold">Hive House</h1>
            
           
            <p className="text-sm text-gray-400">10/2, Lake View Gardens, Nuwara Eliya, Sri Lanka</p>

            
            <div className="flex justify-between w-full text-gray-400">
              <p className="text-sm">Beds</p>
              <p className="text-sm">Bath</p>
              <p className="text-sm">Sq Ft</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-sm">5</p>
              <p className="text-sm">6</p>
              <p className="text-sm">2340</p>
            </div>

          
            <p className="text-sm text-gray-400">
              Spacious 5-bedroom, 6-bathroom home featuring modern interiors, an open-plan living area, and a private garden. Perfect for comfort and entertaining!
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <p className="text-xl font-semibold">See home</p>
              <GoArrowUpRight size={18} />
            </div>
          </div>

        </CardContent>
      </Card>
    </section>
  );
}