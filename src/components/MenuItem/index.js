/* eslint-disable react/default-props-match-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
const MenuItem = ({ itemKey, itemName, active }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById(itemKey));
  }, [itemKey]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessability!
   */
  return (
    <a
      href={`#${itemKey}`}
      onClick={handleClick}
      active={active}
      className={`block mt-5 md:mt-0 md:ml-8 text-coregray text-sm hover:text-vividblue dark:text-white lg:inline-block font-medium ${active ? 'text-red-500' : 'text-coregray'}`}
      ariaLabel={`Scroll to ${itemKey}`}
    >
      {itemName}
    </a>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  itemKey: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

MenuItem.defaultProps = {
  children: null,
};
