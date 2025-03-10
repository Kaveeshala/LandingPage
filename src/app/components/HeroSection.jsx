import { Accordion } from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/images/image1.png'



export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-20 ">
                <div className='flex justify-between items-center'>
                <div className="flex flex-col justify-center">
                  <h3 className="text-7xl text-black tracking-wide leading-tight font-semibold">
                    Discover a place <br /> you 'll love to live
                  </h3>
                </div>
        
                <div className="flex flex-col gap-12">
                  <h1 className="text-gray-400 text-xm leading-tight">
                    Beautiful homes. Incredible Locations. <br /> Pricing that makes sense
                  </h1>
        
                  <div className="flex gap-8">
                    {/* City Dropdown */}
                 <div className='flex flex-col gap-2'>
                    <Label className='text-gray-400'>City</Label>
                
                    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Maharagama" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    </div>

    <div className='flex flex-col gap-2'>
                    <Label className='text-gray-400'>Type</Label>
                
                    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Moden" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    </div>
        
                   
                    
                  </div>
                </div>
                </div>

                {/* Image 1 section */}
                      <div className="flex justify-center py-10 relative h-[500px]">
                        <Image
                          src={image1}
                          alt="house"
                          layout='fill'
                        />
                      </div>
                
              </section>
  )
}
