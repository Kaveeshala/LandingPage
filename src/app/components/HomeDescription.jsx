import Image from 'next/image'
import HiveHouse from '../../../public/images/HiveHouse.png'
import { GoArrowUpRight } from "react-icons/go"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'

export default function HomeDescription() {
  return (
    <section className="max-w-7xl mx-auto">
      <Card className="w-full border-none shadow-none">
        <CardContent className='flex gap-2'> 

          <div className='w-400 h-100'>
          <Image 
            src={HiveHouse} 
            alt="HiveHouse"
            className='w-full' 
          />
          </div>
          <div className='flex flex-col gap-6 max-w-full'> 
           
            <div className='flex items-center gap-2'>
              <Separator className="flex-grow h-[2px] bg-black my-4" />
              <h1 className="text-lg font-semibold whitespace-nowrap">Available now</h1>
            </div>
            
            
            <h1 className="text-5xl font-semibold">Hive House</h1>
            <p className='text-sm text-gray-400'>10/2, Lake V iew Gardens, Nuwara Eliya, Sri Lanka</p>

            <div className='flex flex-cols justify-between w-full'>
            <p>beds</p>
            <p>bath</p>
            <p>sq ft</p>
            </div>
            <div className='flex flex-cols justify-between w-full'>
            <p>5</p>
            <p>6</p>
            <p>2340</p>
            </div>

            <p className="text-sm text-gray-400">
              Spacious 5-bedroom, 6-bathroom home featuring modern interiors, an open-plan living area, and a private garden. Perfect for comfort and entertaining!
            </p>

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
