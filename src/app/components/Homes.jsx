import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import countryside from '../../../public/images/countryside.png'
import modern from '../../../public/images/modern.png'
import modernapartment from '../../../public/images/modernapartment.png'
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Homes() {

    const images = [
        {
            src: modernapartment,
            title: "Modern Apartment",
            description: "No. 25, Galle Road, Colombo 03, Sri Lanka",
            description2: "Modern"
        },
        {
            src: countryside,
            title: "Country Style House",
            description: "145/7, Kandy Road, Peradeniya, Sri Lanka",
            description2: "Country / Modern"
        },
        {
            src: modern,
            title: "Modern 2 Sto. House",
            description: "36A, Beachside Avenue, Galle, Sri Lanka",
            description2: "Modern"
        }
    ]
    

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-4">
    {/* First Child */}
    <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
            <h3 className="text-5xl leading-tight text-black font-semibold">New homes <br /> in sale</h3>
        </div>
          
        <div className="flex flex-col gap-6">
            <h1 className="text-gray-400 text-base leading-tight">
                Explore a handpicked selection of homes for sale and find the perfect place to call <br /> 
                your own. Start your journey toward your dream home today!
            </h1>
            <div className="flex items-center text-black font-semibold text-xs">
                <p className="text-xl tracking-wider">View all homes</p>
                <GoArrowUpRight size={18} />
            </div>
        </div>
    </div>

    <div className="flex flex-cols gap-0.5 w-full"> {/* Reduced gap */}
        {images.map((image, index) => (
            <Card key={index} className="w-full border-none shadow-none"> {/* Full width */}

            <CardHeader>
                <Image 
                  src={image.src}
                  alt='image'

                />
            </CardHeader>
            <CardContent className="space-y-2">
                <CardTitle className="text-2xl">{image.title}</CardTitle>
                <p className="text-gray-400 text-sm">{image.description}</p>
                <p>{image.description2}</p>
            </CardContent>
            </Card>
        ))}
        
    </div>

   
    
</section>

  )
}
