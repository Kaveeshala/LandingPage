import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { Label } from "@/components/ui/label";
import Link from 'next/link';

const Footer = () => {

  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Buy',
      link: '/'
    },
    {
      name: 'About',
      link: '/'
    },
    {
      name: 'Contact us',
      link: '/'
    },
  ]
  
  return (
    <footer>
      <hr className="w-full mx-auto border-gray-300 mt-26"/>
      <div className="max-w-7xl mx-auto flex flex-col mt-10">
      <div className='flex justify-between items-center'>
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold tracking-wide">Tilestone</h1>
          <p className=" text-gray-400 mt-4">Discover Your Dream Home - Explore Listings <br /> & Find Perfect Match!</p>

          <Label className="mt-12 p-2">Subscribe to our newsletter</Label>

          <div className="flex flex-cols items-center gap-2">
          <Input
                type="email"
                id="email"
                placeholder="Email"
                className="w-64 h-9  border border-gray-300"
              />
              <Button className='transition cursor-pointer active:scale-90'>send</Button>
          </div>
        </div>

        <div className="flex flex-cols justify-between">
          <div className="flex flex-col gap-6 text-gray-400 space-x-10"> 
          {navLinks.map((link, index) => (
              <Link href={link.link} key={index} className='hover:underline'>{link.name}</Link>

            ))}
          </div>
        </div>

      </div>
      </div>

      <div className="flex flex-col gap-2">
      <hr className=" mt-18 ml-25 mr-25 mx-auto border-gray-300" />
      <p className="mt-6 mb-6 text-center text-sm tracking-wide text-gray-500">
        &copy;2025 Tilestone. All rights Reserved.
      </p>
      </div>
      
    </footer>
  );
};

export default Footer;
