import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="lg:px-20 lg:py-10 px-6 py-10 bg-black text-white py-6">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
          {/* Column 1 */}
          <div>
            <img src="images/whitelogo.svg" alt="Logo" className="lgw-4/5 w-40 h-16 mb-6" />
            <p className="lg:text-lg">Questions or concerns? Contact us via our Live Chat, and one of our representatives will be happy to assist you.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Disclaimer</h3>
            <p className="lg:text-lg">Smartap® is not a part of the Google website or Google Inc. Additionally, This site is NOT endorsed by Google in any way. Google is a trademark of Google, Inc.</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="lg:text-lg list-none">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Input */}
        <div className="mt-4 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h3>
          <p className="lg:text-lg mb-6">Unlock valuable tips and tricks to reach a wider audience and maximize results for your business</p>
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-white hover:bg-gray-400 text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-4">
        &copy; 2023 Taptam. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
