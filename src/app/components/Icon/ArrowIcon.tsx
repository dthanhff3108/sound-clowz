import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const ArrowIcon = (props: Props) => {
  const { size = 36, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 36 36">
        <rect width={size} height={size} rx="18"></rect>
        <path d="M22 27L12 18L22 9" stroke="black" strokeWidth="1.6"></path>
      </svg>
    </div>
  );
};

export default ArrowIcon;
