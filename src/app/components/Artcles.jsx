import { Marquee } from "@/components/magicui/marquee"

export default function Artcles() {
  return (
    <div>
      <h1 className="text-center font-semibold text-6xl py-8">Articles</h1> {/* Increased text size */}
      <div className="py-8"></div> {/* Added space */}
      
      <Marquee className="your-custom-class" pauseOnHover speed={50}>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Your Bathroom</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-gray-400 text-5xl">July 03, 2025</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span> {/* Increased text size */}
        </div>
      </Marquee>
      
      <div className="py-4"></div> {/* Added space between marquees */}
      
      <Marquee className="your-custom-class" pauseOnHover speed={30}>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-gray-400 text-5xl">July 03, 2025</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span> {/* Increased text size */}
        </div>
      </Marquee>
      
      <div className="py-4"></div> {/* Added space between marquees */}
      
      <Marquee className="your-custom-class" pauseOnHover speed={20}>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-gray-400 text-5xl">July 03, 2025</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span> {/* Increased text size */}
          <span className="text-5xl">•</span> {/* Increased text size */}
          <span className="text-5xl">Your Bathroom</span> {/* Increased text size */}
        </div>
      </Marquee>     
    </div>
  )
}
