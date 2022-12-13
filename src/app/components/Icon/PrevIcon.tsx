import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const PrevIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size}>
        <path d="M7 6h2v12H7V6zm2 6l8 6V6l-8 6z"></path>
      </svg>
    </div>
  );
};

export default PrevIcon;
