import Link from 'next/link'

export default function Navbar() {

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
    <div className=' bg-white'>
      <nav className='py-6 px-2 flex justify-between'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='px-16 text-black text-3xl font-semibold'>Tilestone</h1>
          <div className='flex gap-8'>
          <div className='flex gap-8 items-center text-black text-base'>
            
            {navLinks.map((link, index) => (
              <Link href={link.link} key={index} className='hover:underline'>{link.name}</Link>

            ))}
          </div>
          <button className='px-6 py-1 border border-black rounded-full hover:cursor-pointer hover:scale-105 hover:bg-gray-300 active:scale-90 transition-transform duration-200'>
              Sign up
            </button>
            </div>
        </div>
      </nav>
      <hr className='my-3 w-full mx-auto border-gray-300' />
    </div>
    
  )
}