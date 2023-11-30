import React from 'react';

const Button = ({ align, variation, children }) => {
  const btnClasses = `btn align-${align} ${getVariationClass(variation)} f5 link dim br3 bn ph5 ma3 b pv3 mb2 dib`;

  return (
    <button className={btnClasses}>
      {children}
    </button>
  );
};

const getVariationClass = (variation) => {
  switch (variation) {
    case 'primary':
      return 'bg-green white';
    case 'secondary':
      return 'bg-hot-pink white';
    default:
      return '';
  }
};

export default Button;
