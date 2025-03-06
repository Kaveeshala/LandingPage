import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import image6 from '../../../public/images/image6.png';
import { GoArrowUpRight } from "react-icons/go";

export default function HomeDescription() {
  return (
    <section className="max-w-7xl mx-auto">
      <Card className="w-full border-none shadow-none">
        <CardContent className="flex gap-8"> 
          {/* Left side: Text content (larger column) */}
          <div className="flex flex-col gap-20 w-3/5"> {/* Increased width to 60% */}
            <h1 className="text-5xl">
              Expertise and<br /> passion, on measure
            </h1>
            
            {/* Paragraph with justified content */}
            <p className="text-xm text-justify text-gray-500  indent-16">
              From humble beginnings to a trusted name, our
              journey has been built on passion, dedication, and a commitment to
              excellence. Over the years, we have grown with a vision to provide
              exceptional service, creating lasting relationships with our clients and
              communities. With a strong foundation and a forward-thinking
              approach, we continue to evolve, embracing innovation while staying
              true to our core values.
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <p className="text-xl font-semibold">See home</p>
              <GoArrowUpRight size={18} />
            </div>
          </div>

          {/* Right side: Image (smaller column) */}
          <div className="flex-shrink-0 w-2/4"> {/* Reduced width to 40% */}
            <Image 
              src={image6}
              alt="image6"
              width={900}  
              height={500} 
              className="w-full h-auto object-cover" 
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}