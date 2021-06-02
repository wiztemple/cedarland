/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import MenuItem from '../../components/MenuItem';
import Navbar from '../../components/Navbar';
import { ThemeContext } from '../../context/themeContext';

// extra styles
import '../../App.css';

const menuItems = {
  Top: 'Home',
  Section1: 'Projects',
  Section2: 'Services',
  Section3: 'About Us',
  Section4: 'Team',
  Section5: 'Contact Us',
};
const Home = () => {
  const { theme } = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const [activeItem, setActiveItem] = useState('Home');
  const menuList = Object.entries(menuItems).map(([key, value], i) =>
    // console.log(key, value, i)
    <MenuItem itemName={value} itemKey={key} key={`menuitem_${i}`} active={value === activeItem} />);
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar menuList={menuList} />
        <h1 className="text-5xl font-semibold">Home</h1>
        <section>
          <div className="md:px-20">
            <h1 className="text-9xl font-semibold text-snowgrey">Our Projects</h1>
            <h1 className="text-5xl font-bold text-cedarland">
              Here are some projects that
              <br />
              we take real pride in
            </h1>
            <div className="md:flex md:space-x-6 pt-5 md:pt-12 md:h-562px w-full">
              <div className="md:w-1/2 h-full">
                <img className="md:h-full w-full rounded-lg object-cover" src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="house construcion" />
              </div>
              <div className="md:w-1/2 h-full flex-col flex items-stretch">
                <div className="md:flex md:space-x-6 ">
                  <div className="">
                    <img
                      src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      className="md:h-245px w-full object-cover rounded-lg"
                      alt="house construction"
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      className="md:h-245px w-full object-cover rounded-lg"
                      alt="house construction"
                    />
                  </div>
                </div>
                <div className="md:flex md:space-x-6 mt-6">
                  <div className="">
                    <img
                      src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      className="md:h-245px w-full object-cover rounded-lg"
                      alt="house construction"
                    />
                  </div>
                  <div className="">
                    <img
                      src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      className="md:h-245px w-full object-cover rounded-lg"
                      alt="house construction"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="md:py-40">
            <h1 className="text-9xl font-semibold text-snowgrey">Recently Completed</h1>
            <div>
              <h1 className="text-4xl font-bold text-cedarland">
                Our recently
                <br />
                completed project
              </h1>
            </div>
            <div className="md:flex pt-5 md:pt-12">
              <div className="md:w-1/2 md:flex">
                <div className="flex-1">
                  <div className="relative recentcard">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="flex items-center space-x-4 link-holder">
                        <h1>Skyscrapers</h1>
                        <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.5625 12.5C1.5625 12.2928 1.64481 12.0941 1.79132 11.9476C1.93784 11.8011 2.13655 11.7188 2.34375 11.7188H20.7703L15.8531 6.80314C15.7064 6.65644 15.624 6.45747 15.624 6.25001C15.624 6.04255 15.7064 5.84358 15.8531 5.69689C15.9998 5.55019 16.1988 5.46777 16.4063 5.46777C16.6137 5.46777 16.8127 5.55019 16.9594 5.69689L23.2094 11.9469C23.2821 12.0195 23.3399 12.1057 23.3792 12.2006C23.4186 12.2955 23.4389 12.3972 23.4389 12.5C23.4389 12.6028 23.4186 12.7045 23.3792 12.7994C23.3399 12.8943 23.2821 12.9806 23.2094 13.0531L16.9594 19.3031C16.8127 19.4498 16.6137 19.5322 16.4063 19.5322C16.1988 19.5322 15.9998 19.4498 15.8531 19.3031C15.7064 19.1564 15.624 18.9575 15.624 18.75C15.624 18.5425 15.7064 18.3436 15.8531 18.1969L20.7703 13.2813H2.34375C2.13655 13.2813 1.93784 13.1989 1.79132 13.0524C1.64481 12.9059 1.5625 12.7072 1.5625 12.5V12.5Z" fill="black" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 bg-black bg-opacity-40">s</div>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <img
                    className="md:h-550px h-275px w-full object-cover"
                    src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="house construcion"
                  />
                  <div className="absolute h-full w-full bg-black bg-opacity-40 top-0">s</div>
                </div>
              </div>
              <div className="md:w-1/2 md:flex">
                <div className="flex-1">
                  <div className="relative">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full bg-black bg-opacity-40 top-0">s</div>
                  </div>
                  <div className="relative">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full bg-black bg-opacity-40 top-0">s</div>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <img
                    className="md:h-550px w-full object-cover"
                    src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="house construcion"
                  />
                  <div className="absolute h-full w-full bg-black bg-opacity-40 top-0">s</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
