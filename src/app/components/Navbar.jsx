import Link from 'next/link'

export default function Navbar() {
  return (
    <div className=' bg-white'>
      <nav className='py-6 px-2 flex justify-between'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='px-16 text-black text-3xl font-semibold'>Tilestone</h1>
          <div className='flex space-x-12 items-center text-black text-base'>
            <Link href='/'>
              Home
            </Link>
            <Link href='/'>
              Buy
            </Link>
            <Link href='/'>
              About
            </Link>
            <Link href='/' >
              Contact us
            </Link>
            <button className='px-6 py-1 border border-black rounded-full'>
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <hr className='my-3 w-full mx-auto border-gray-300' />
    </div>
    
  )
}