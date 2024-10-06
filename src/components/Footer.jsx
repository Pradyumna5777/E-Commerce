import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 w-[100vw] text-white py-10">
      <div className="w-full">
        <div className="flex md:flex-row flex-col md:gap-0 gap-12 items-center w-[100vw] justify-around">
          <div className=" flex justify-center items-center flex-col">
            <h2 className="md:text-base text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="hover:text-blue-500">
                <i className="ri-facebook-fill md:text-2xl"></i>
              </Link>
              <Link to="https://twitter.com" className="hover:text-blue-400">
                <i className="ri-twitter-fill md:text-2xl"></i>
              </Link>
              <Link to="https://www.instagram.com/_p_chaurasiya/" className="hover:text-pink-500">
                <i className="ri-instagram-fill md:text-2xl"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/pradyumna-kumar-chaurasiya-b958611b7/" className="hover:text-blue-700">
                <i className="ri-linkedin-fill md:text-2xl"></i>
              </Link>
            </div>
          </div>

          <div className=" flex justify-center items-center flex-col">
            <h2 className="md:text-base text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-2 md:text-base text-sm">Email: chaurasiyapradyumna5955@gmail.com</p>
            <p className="mb-2 md:text-base text-sm">Phone: 6206002096</p>
            <p className="md:text-base text-sm">Address: E-Commerce, Siwan, Bihar, India</p>
          </div>

          <div className=" flex justify-center flex-col">
            <h2 className="md:text-base text-lg font-bold mb-4">More</h2>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:text-gray-400 md:text-base text-sm">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:text-gray-400 md:text-base text-sm">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="hover:text-gray-400 md:text-base text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-400 md:text-base text-sm">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="md:text-base text-xs">© 2024 E-Commerce App. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
