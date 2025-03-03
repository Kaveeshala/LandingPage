import { Marquee } from "@/components/magicui/marquee"

export default function Artcles() {
  return (
    <div>
      <h1 className="text-center text-5xl py-8">Articles</h1>
      <Marquee className="your-custom-class" pauseOnHover>
        <div className="flex flex-col space-y-12 text-center">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl">•</span>
            <span className="text-4xl">Your Bathroom</span>
            <span className="text-4xl">•</span>
            <span className="text-gray-400 text-4xl">July 03, 2025</span>
            <span className="text-4xl">•</span>
            <span className="text-4xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl">•</span>
            <span className="text-4xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span>
            <span className="text-4xl">•</span>
            <span className="text-gray-400 text-4xl">July 03, 2025</span>
            <span className="text-4xl">•</span>
            <span className="text-4xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl">•</span>
            <span className="text-gray-400 text-4xl">July 03, 2025</span>
            <span className="text-4xl">•</span>
            <span className="text-4xl">Bathroom Trends You'll Want To Incorporate in Your Bathroom</span>
            <span className="text-4xl">•</span>
            <span className="text-4xl">Your Bathroom</span>
          </div>
        </div>
      </Marquee>     
    </div>
  )
}
