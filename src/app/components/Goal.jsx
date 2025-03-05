import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import image6 from '../../../public/images/image6.png'
import { GoArrowUpRight } from "react-icons/go"

export default function Goal() {
  return (
    <section className='max-w-7xl mx-auto'>
      <Card className="w-full border-none shadow-none">
        
        {/* Card Title */}
        <CardTitle>
          <p className="text-5xl py-6">
            Expertise and<br /> passion, on measure
          </p>
        </CardTitle>

        {/* Card Content */}
        <CardContent>
          <div className="flex justify-between items-start">
            
          <div className="flex-1">
            <p className="text-xs text-justify leading-loose indent-16">
              From humble beginnings to a trusted name, our
            <br /> 
              journey has been built on passion, dedication, and a commitment to
            <br /> 
              excellence. Over the years, we have grown with a vision to provide
            <br /> 
              exceptional service, creating lasting relationships with our clients and
             <br /> 
              communities. With a strong foundation and a forward-thinking
            <br /> 
              approach, we continue to evolve, embracing innovation while staying
            <br /> 
              true to our core values.
            </p>
         </div>

        


            <div className="flex flex-cols items-start gap-20 mt-[-150px]">
              <Image 
                src={image6}
                alt="image6"
                width={600}   // Adjusted width
                height={700}  // Adjusted height
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>

        <div className="flex flex-colsitems-center text-black font-semibold text-xs">
                <p className="text-xl tracking-wider">View all homes</p>
                <GoArrowUpRight size={18} />
        </div>
      </Card>
    </section>
  )
}
