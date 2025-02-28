import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-white p-5'>
      <nav className='px-2 py-1 flex justify-between'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-black text-xl font-semibold px-16'>Tilestone</h1>
          <div className='flex space-x-4 items-center'>
            <Link href='/' className='text-black text-sm'>
              Home
            </Link>
            <Link href='/' className='text-black text-sm'>
              Buy
            </Link>
            <Link href='/' className='text-black text-sm'>
              About
            </Link>
            <Link href='/' className='text-black text-sm'>
              Contact us
            </Link>
            <button className='text-sm border px-5 py-1 border-black rounded-full'>
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <hr className='border-gray-300 my-3 w-full' />
    </div>
  )
}