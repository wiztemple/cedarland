/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
import Logo from '../../assets/images/logo.jpg';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className="md:flex border-t border-white dark:border-gray-800">
        <div className="md:w-1/2 bg-milkgrey dark:bg-gray-900">
          <div className="md:py-20 md:px-20 px-5 py-10">
            <h1 className="md:text-4xl text-xl font-medium dark:text-white">
              Need help with
              <br />
              We Love to talk with you!
            </h1>
            <p className="text-lg pt-5 md:pt-10 dark:text-gray-300">
              Lets hear about it,
              <span className="text-sparkchoco"> contact us</span>
            </p>
            <div className="flex space-x-3 md:space-x-5 md:py-20 py-10">
              <a href="5">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0C6.71617 0 0 6.75672 0 15.0906C0 22.6215 5.48455 28.8636 12.6568 30V19.4537H8.84639V15.0906H12.6568V11.7658C12.6568 7.98068 14.8965 5.89345 18.3213 5.89345C19.9625 5.89345 21.6817 6.18775 21.6817 6.18775V9.89888H19.7855C17.9253 9.89888 17.3432 11.064 17.3432 12.2578V15.0875H21.5002L20.8356 19.4507H17.3432V29.997C24.5155 28.8666 30 22.623 30 15.0906C30 6.75672 23.2838 0 15 0Z" fill={theme === 'light' ? 'black' : 'white'} />
                </svg>
              </a>
              <a href="5">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0625 15C20.0625 12.1875 17.8125 9.9375 15 9.9375C12.1875 9.9375 9.9375 12.1875 9.9375 15C9.9375 17.8125 12.1875 20.0625 15 20.0625C17.8125 20.0625 20.0625 17.8125 20.0625 15ZM22.6875 15C22.6875 19.3125 19.3125 22.6875 15 22.6875C10.6875 22.6875 7.3125 19.3125 7.3125 15C7.3125 10.6875 10.6875 7.3125 15 7.3125C19.3125 7.3125 22.6875 10.6875 22.6875 15ZM24.75 6.9375C24.75 8.0625 24 8.8125 22.875 8.8125C21.75 8.8125 21 8.0625 21 6.9375C21 5.8125 21.75 5.0625 22.875 5.0625C24 5.0625 24.75 6 24.75 6.9375ZM15 2.625C12.75 2.625 8.0625 2.4375 6.1875 3.1875C4.875 3.75 3.75 4.875 3.375 6.1875C2.625 8.0625 2.8125 12.75 2.8125 15C2.8125 17.25 2.625 21.9375 3.375 23.8125C3.75 25.125 4.875 26.25 6.1875 26.625C8.0625 27.375 12.9375 27.1875 15 27.1875C17.0625 27.1875 21.9375 27.375 23.8125 26.625C25.125 26.0625 26.0625 25.125 26.625 23.8125C27.375 21.75 27.1875 17.0625 27.1875 15C27.1875 12.9375 27.375 8.0625 26.625 6.1875C26.25 4.875 25.125 3.75 23.8125 3.375C21.9375 2.4375 17.25 2.625 15 2.625ZM30 15V21.1875C30 23.4375 29.25 25.6875 27.5625 27.5625C25.875 29.25 23.625 30 21.1875 30H8.8125C6.5625 30 4.3125 29.25 2.4375 27.5625C0.9375 25.875 0 23.625 0 21.1875V15V8.8125C0 6.375 0.9375 4.125 2.4375 2.4375C4.3125 0.9375 6.5625 0 8.8125 0H21.1875C23.4375 0 25.6875 0.75 27.5625 2.4375C29.0625 4.125 30 6.375 30 8.8125V15Z" fill={theme === 'light' ? 'black' : 'white'} />
                </svg>
              </a>
              <a href="5">
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30 3.08099C28.8767 3.6118 27.6851 3.95999 26.465 4.11392C27.7502 3.29373 28.712 2.00344 29.1712 0.48334C27.963 1.24826 26.6411 1.78737 25.2625 2.07738C24.3358 1.02216 23.1082 0.322659 21.7705 0.0874628C20.4327 -0.147733 19.0595 0.0945323 17.8641 0.776652C16.6687 1.45877 15.7179 2.54259 15.1593 3.85986C14.6008 5.17713 14.4657 6.65417 14.775 8.0617C12.3275 7.93128 9.93312 7.25322 7.74748 6.07158C5.56183 4.88994 3.63382 3.23117 2.08875 1.20306C1.54114 2.20471 1.25338 3.34369 1.255 4.5031C1.255 6.77954 2.34125 8.78942 3.99375 9.96629C3.01638 9.93256 2.06053 9.65161 1.205 9.14661V9.22658C1.20481 10.7422 1.69641 12.2112 2.59637 13.3843C3.49634 14.5574 4.74925 15.3624 6.1425 15.6627C5.23582 15.9243 4.28526 15.9631 3.3625 15.776C3.75575 17.08 4.52139 18.2204 5.55235 19.0377C6.58331 19.855 7.82805 20.3083 9.1125 20.3342C6.93196 22.1576 4.2399 23.1467 1.46875 23.1424C0.97125 23.1424 0.48125 23.1118 0 23.0518C2.81454 24.9795 6.08984 26.0029 9.435 26C20.7563 26 26.9462 15.9999 26.9462 7.32732C26.9462 7.04343 26.94 6.76088 26.9287 6.47965C28.1338 5.55033 29.1738 4.39945 30 3.08099Z" fill={theme === 'light' ? 'black' : 'white'} />
                </svg>
              </a>
              <a href="5">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z" fill={theme === 'light' ? 'black' : 'white'} />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-milkpurple dark:bg-gray-800">
          <div className="md:py-20 md:px-20 px-5 py-10">
            <img className="block w-20 h-16 0bject-cover rounded-lg" src={Logo} alt="logo" />
            <div className="pt-10">
              <p className="text-purplegray dark:text-gray-300">
                We believe in great architecture.
                <br />
                We build everlasting homes for dear customers.
              </p>
            </div>
            <div className="md:flex md:pt-16 pt-8">
              <div className="flex-1">
                <h1 className="text-24px font-semibold uppercase text-cedarland">OUR PROJECTS</h1>
                <div className="pt-2">
                  <Link to="/" className="text-sm block pt-2 text-gray-500 dark:text-gray-300">Interior Design</Link>
                  <Link to="/" className="text-sm block pt-2 text-gray-500 dark:text-gray-300">Architecture</Link>
                  <Link to="/" className="text-sm block pt-2 text-gray-500 dark:text-gray-300">Engineering</Link>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-24px font-semibold uppercase text-cedarland pt-8 md:pt-0">SOCIALS</h1>
              </div>
            </div>
            <p className="text-purplegray dark:text-gray-300 md:pt-16 pt-8">Copyright © 2021 Cedarland. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
