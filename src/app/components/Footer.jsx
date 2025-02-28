const Footer = () => {
  return (
    <footer>
      <hr className='border-gray-300 my-3 w-full' />
      <div className="ml-7">
        <h2 className="text-black font-bold text-4xl mt-6">Tilestone</h2>
        <p className="mt-8 text-gray-400">Discover Your Dream Home - Explore Listings <br /> & Find Perfect Match!</p>

        <h1 className="font-semibold text-sm py-2">Subscribe to our newsletter</h1>

        {/* Email Input */}
        <div className="flex-colum p-4 mt-0 flex justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded p-2 w-43 h-8"
              placeholder="Enter your email"
            />
            <button className="bg-black text-white rounded p-2 h-8">Send</button>
          </div>
          <ul className="flex flex-col space-y-2 justify-end text-gray-400">
            <li>Home</li>
            <li>Buy</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-300 my-3 w-full' />
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;2025 Tilestone. All rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;
