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
      </div>
    </>
  );
};

export default Home;
