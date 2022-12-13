import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const RepeatIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size}>
        <path d="M12 8H9a4 4 0 1 0 0 8h6a4 4 0 0 0 2.104-7.403l1.77-1.18.02.018A6 6 0 0 1 15 18H9A6 6 0 1 1 9 6h3V4l4 3-4 3V8z"></path>
      </svg>
    </div>
  );
};

export default RepeatIcon;
