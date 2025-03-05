import Image from 'next/image'
import HiveHouse from '../../../public/images/HiveHouse.png'
import { GoArrowUpRight } from "react-icons/go"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'

export default function HomeDescription() {
  return (
    <section className="max-w-7xl mx-auto">
      <Card className="w-full border-none shadow-none">
        <CardContent className="flex justify-between items-start gap-x-12">
          {/* Image on the left */}
          <Image 
            src={HiveHouse} 
            alt="HiveHouse" 
            width={2100} 
            height={300} 
          />
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-2 w-full">
            
            {/* Separator and Available Now on the Same Line */}
            <div className="flex items-center w-full gap-4">
              <Separator className="flex-grow h-[2px] bg-black" />
              <h1 className="text-lg font-semibold">Available now</h1> 
            </div>

            {/* Title Centered */}
            <div className="flex justify-center gap-12 w-full">
              <h2 className="text-5xl tracking-wider font-semibold">Hive House</h2> 
            </div>

            {/* First Paragraph (Normal Alignment) */}
            <div>
              <p className="text-sm text-gray-400">
                10/2, Lake View Gardens, Nuwara Eliya, Sri Lanka
              </p>
            </div>

            <div className="flex justify-between w-full">
              <p>beds</p>
              <p>bath</p>
              <p>sq ft</p>
            </div>
            <div className="flex justify-between w-full">
              <p>5</p>
              <p>6</p>
              <p>2340</p>
            </div>
            <p className="text-sm text-gray-400">
              Spacious 5-bedroom, 6-bathroom home featuring modern interiors, an open-plan living area, and a private garden. Perfect for comfort and entertaining!
            </p>
            
            {/* See Home Link */}
            <div className="flex items-center gap-4">
              <p>See home</p>
              <GoArrowUpRight size={18} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
