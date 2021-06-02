/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import MenuItem from '../../components/MenuItem';
import Navbar from '../../components/Navbar';
import { ThemeContext } from '../../context/themeContext';

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
                  <div className="relative">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full bg-black bg-opacity-40 top-0">s</div>
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
