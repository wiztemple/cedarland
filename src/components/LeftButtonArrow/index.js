import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/themeContext';

const LeftButtonArrow = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button type="button" className="md:ml-20" onClick={() => onClick()}>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3 17.5C28.8523 17.5 29.3 17.9477 29.3 18.5C29.3 19.0523 28.8523 19.5 28.3 19.5V17.5ZM10.7929 19.2071C10.4024 18.8166 10.4024 18.1834 10.7929 17.7929L17.1568 11.4289C17.5474 11.0384 18.1805 11.0384 18.5711 11.4289C18.9616 11.8195 18.9616 12.4526 18.5711 12.8431L12.9142 18.5L18.5711 24.1569C18.9616 24.5474 18.9616 25.1805 18.5711 25.5711C18.1805 25.9616 17.5474 25.9616 17.1568 25.5711L10.7929 19.2071ZM28.3 19.5H11.5V17.5H28.3V19.5Z" fill={theme === 'light' ? '#545454' : '#FFF'} />
        <circle r="17.5" transform="matrix(-1 0 0 1 18.5 18.5)" stroke={theme === 'light' ? '#545454' : '#FFF'} strokeWidth="2" />
      </svg>
    </button>
  );
};

export default LeftButtonArrow;

LeftButtonArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
