import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const MoreIcon = (props: Props) => {
  const { size = 14, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 14 4" version="1.1">
        <g fillRule="evenodd">
          <circle cx="2" cy="2" r="2"></circle>
          <circle cx="7" cy="2" r="2"></circle>
          <circle cx="12" cy="2" r="2"></circle>
        </g>
      </svg>
    </div>
  );
};

export default MoreIcon;
