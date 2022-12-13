import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const NextIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size}>
        <path d="M7 18l8-6-8-6v12zm8-12v12h2V6h-2z"></path>
      </svg>
    </div>
  );
};

export default NextIcon;
