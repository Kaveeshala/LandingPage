const Footer = () => {
  return (
    <footer>
      <hr className='my-3 w-full mx-auto border-gray-300' />
      
      <div className="flex justify-between">
        <div className="ml-25">
          <h2 className="mt-6 text-black font-bold text-6xl">Tilestone</h2>
          <p className="mt-6 text-gray-400">Discover Your Dream Home - Explore Listings <br /> & Find Perfect Match!</p>

          <h1 className="mt-12 text-sm font-semibold">Subscribe to our newsletter</h1>

          {/* Email Input */}
          <div className="flex-colum mt-2 mb-9 flex justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="email"
                id="email"
                className="w-64 h-9 p-2 border border-gray-300 rounded"
                placeholder="Email"
              />
              <button className="h-9 w-17 py-1 px-2 bg-black text-white rounded">Send</button>
            </div>
          </div>
        </div>
        <ul className="flex flex-col space-y-6 space-x-36 pt-6 justify-start text-gray-500 ">
          <li>Home</li>
          <li>Buy</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>

      <hr className='my-3 ml-25 mr-25 mx-auto border-gray-300' />
      <p className="mt-6 mb-6 text-center text-sm tracking-wide text-gray-500">
            &copy;2025 Tilestone. All rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;
