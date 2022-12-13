import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const MenuPlayerIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path d="M6 11h12v2H6zM6 7h8v2H6zM6 15h12v2H6zM16 3v6l4-3z"></path>
      </svg>
    </div>
  );
};

export default MenuPlayerIcon;
