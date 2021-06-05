/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MenuItem from '../../components/MenuItem';
import Navbar from '../../components/Navbar';
import CustomButtonGroupAsArrows from '../../components/CustomButtonGroupAsArrows';
import { ThemeContext } from '../../context/themeContext';
// extra styles
import '../../App.css';
import Footer from '../../components/Footer';

const menuItems = {
  Top: 'Home',
  Section1: 'Projects',
  Section2: 'Services',
  Section3: 'About Us',
  Section4: 'Team',
  Section5: 'Contact Us',
};

const interiors = [
  {
    title: 'Staircase',
    image_url: 'https://images.unsplash.com/photo-1589910511971-a90edfbbb343?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    link: '/blog/article/2',
  },
  {
    title: 'Kitchens',
    image_url: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    link: '/blog/article/2',
  },
  {
    title: 'Living Rooms',
    image_url: 'https://images.unsplash.com/photo-1585264550534-7890a89b7270?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    link: '/blog/article/2',
  },
  {
    title: 'Bed Rooms',
    image_url: 'https://images.unsplash.com/photo-1591079381491-cb2c19ce7f15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    link: '/blog/article/2',
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
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
      <div className="overflow-x-hidden bg-cream dark:bg-kiwi">
        <Navbar menuList={menuList} />
        <section className="md:pt-60 md:pb-40 md:pl-20 pl-5 pr-5 pt-40" id="Top">
          <div className="md:flex">
            <div className="md:w-1/2">
              <h1 className="md:text-7xl text-5xl md:leading-snug  font-semibold text-cedarland dark:text-sparkchoco capitalize">
                We
                <span className="text-sparkchoco mx-2 bg-sparkchoco bg-opacity-10">Build</span>
                your
                <span className="text-sparkchoco block mx-2">Dreams</span>
              </h1>
              <p className="pt-8 dark:text-gray-300 text-gray-700 text-lg">We build everlasting homes for dear customers.</p>
              <p className="dark:text-gray-300 text-gray-700 text-lg">We Promise you OPTIMUM designs at minimum cost</p>
              <div className="flex items-center space-x-4 mt-10">
                <button
                  type="button"
                  className="md:px-16 px-10 rounded py-4 bg-sparkchoco text-white hover:bg-cedarland"
                >
                  Lets talk
                </button>
                <Link
                  to="/"
                  className="border border-sparkchoco rounded text-sparkchoco hover:bg-sparkchoco hover:text-white py-4 md:px-12 px-6"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="Section1">
          <div className="md:px-20 px-5">
            <h1 className="md:text-9xl text-5xl font-semibold text-gray-300 dark:text-gray-800 pt-20 md:pt-0">Our Projects</h1>
            <h1 className="md:text-5xl text-4xl pt-5 font-bold text-sparkchoco dark:text-white">
              Here are some projects that
              <br />
              we take real pride in
            </h1>
            <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 pt-5 md:pt-12 md:h-562px w-full">
              <div className="md:w-1/2 h-full">
                <img className="md:h-full w-full rounded-lg object-cover" src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="house construcion" />
              </div>
              <div className="md:w-1/2 h-full flex-col flex items-stretch">
                <div className="md:flex md:space-x-6 space-y-6 md:space-y-0">
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
                <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 mt-6">
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
          <div className="md:py-40 py-20">
            <div className="md:px-20 px-5">
              <h1 className="md:text-8xl text-5xl font-semibold text-gray-300 dark:text-gray-800 pb-5">Recently Completed</h1>
              <h1 className="md:text-5xl text-2xl pb-6 font-bold text-sparkchoco dark:text-white">
                Our recently
                <br />
                completed project
              </h1>
            </div>
            <div className="md:flex">
              <div className="md:w-1/2 md:flex">
                <div className="flex-1">
                  <div className="relative recentcard">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="house construction"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Skyscrapers</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative recentcard">
                    <img
                      className="h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="house construction"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Duplex</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="recentcard relative">
                    <img
                      className="md:h-550px h-275px w-full object-cover"
                      src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Bungalows</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:flex">
                <div className="flex-1">
                  <div className="recentcard relative">
                    <img
                      className="md:h-275px h-275px w-full object-cover"
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Office Complex</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recentcard relative">
                    <img
                      className="md:h-275px h-275px w-full object-cover"
                      src="https://images.unsplash.com/photo-1612819052456-2feb4c6f81ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Shopping Complex</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="recentcard relative">
                    <img
                      className="md:h-550px h-275px w-full object-cover"
                      src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80"
                      alt="house construcion"
                    />
                    <div className="absolute h-full w-full top-0 recentoverlay">
                      <div className="link-holder">
                        <h1>Hotels</h1>
                        <div className="flex justify-end">
                          <a href="a" className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.9375 7.5001C0.9375 7.37578 0.986886 7.25655 1.07479 7.16865C1.1627 7.08074 1.28193 7.03135 1.40625 7.03135H12.4622L9.51188 4.08198C9.42386 3.99396 9.37441 3.87458 9.37441 3.7501C9.37441 3.62563 9.42386 3.50625 9.51188 3.41823C9.59989 3.33021 9.71927 3.28076 9.84375 3.28076C9.96823 3.28076 10.0876 3.33021 10.1756 3.41823L13.9256 7.16823C13.9693 7.21177 14.0039 7.2635 14.0275 7.32045C14.0512 7.3774 14.0633 7.43845 14.0633 7.5001C14.0633 7.56176 14.0512 7.62281 14.0275 7.67976C14.0039 7.73671 13.9693 7.78844 13.9256 7.83198L10.1756 11.582C10.0876 11.67 9.96823 11.7194 9.84375 11.7194C9.71927 11.7194 9.59989 11.67 9.51188 11.582C9.42386 11.494 9.37441 11.3746 9.37441 11.2501C9.37441 11.1256 9.42386 11.0062 9.51188 10.9182L12.4622 7.96885H1.40625C1.28193 7.96885 1.1627 7.91947 1.07479 7.83156C0.986886 7.74365 0.9375 7.62442 0.9375 7.5001V7.5001Z" fill="#603831" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg dark:bg-kiwi">
          <div className="px-5 md:px-16 md:pb-40 pb-32 pt-32 md:pt-0">
            <h1 className="md:text-9xl text-5xl font-semibold text-gray-400 dark:text-gray-800">Interior Design</h1>
            <h1 className="md:text-6xl font-semibold text-sparkchoco dark:text-gray-300 md:py-8 py-5">More on Interior Design</h1>
            <div className="relative">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode
                className=""
                containerClass="container-padding-bottom"
                customButtonGroup={<CustomButtonGroupAsArrows />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="md:ml-5 pb-20"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {interiors?.map((interior) => (
                  <div className="bg-white customshadow rounded-2xl dark:bg-gray-800">
                    <img
                      className="md:h-350px w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                      src={interior.image_url}
                      alt="people"
                    />
                    <div className="md:px-10 px-5 py-6">
                      <Link to={interior.link} className="block text-24px text-cedarland font-bold pt-2 dark:text-white hover:text-sparkchoco">
                        {interior.title}
                      </Link>
                      <div className="">
                        <Link to={interior.link} className="flex bg-transparent space-x-3 items-center mt-4 text-slidertext1" type="button">
                          <span>View all samples</span>
                          <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#9593A4" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
