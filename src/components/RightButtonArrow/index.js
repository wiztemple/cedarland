import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/themeContext';

const RightButtonArrow = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button type="button" className="ml-2 md:mt-20" onClick={() => onClick()}>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.70001 17.5C8.14773 17.5 7.70001 17.9477 7.70001 18.5C7.70001 19.0523 8.14773 19.5 8.70001 19.5V17.5ZM26.2071 19.2071C26.5976 18.8166 26.5976 18.1834 26.2071 17.7929L19.8432 11.4289C19.4526 11.0384 18.8195 11.0384 18.4289 11.4289C18.0384 11.8195 18.0384 12.4526 18.4289 12.8431L24.0858 18.5L18.4289 24.1569C18.0384 24.5474 18.0384 25.1805 18.4289 25.5711C18.8195 25.9616 19.4526 25.9616 19.8432 25.5711L26.2071 19.2071ZM8.70001 19.5H25.5V17.5H8.70001V19.5Z" fill={theme === 'light' ? '#545454' : '#FFF'} />
        <circle cx="18.5" cy="18.5" r="17.5" stroke={theme === 'light' ? '#545454' : '#fff'} strokeWidth="2" />
      </svg>
    </button>
  );
};

export default RightButtonArrow;

RightButtonArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
