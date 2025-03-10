import { Marquee } from '@/components/magicui/marquee'
import Image from 'next/image'
import React from 'react'
import image_iva from '../../../public/images/image_iva.png'
import image_ky from '../../../public/images/image_ky.png'
import image_logoIP from '../../../public/images/image_logoIP.png'
import image_logol from '../../../public/images/image_logol.png'


export default function Clients() {

    const images = [
        image_iva,
        image_ky,
        image_logoIP,
        image_logol

    ]

  return (
    <Marquee className="your-custom-class mt-12" pauseOnHover>
       
        {images.map((image, index ) => (
             <div key={index} className='relative w-32 h-32 ml-12'>
            <Image 
            
            src={image}
            alt='image'
            layout='fill'
            objectFit='contain'/>
             </div>
        ))}
       
      </Marquee>
  )
}
