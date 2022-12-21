import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const WaveIcon = (props: Props) => {
  const { size = 16, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3333 6.66671H15.3333V9.33337H13.3333V6.66671ZM9.33333 4.00004H11.3333V12H9.33333V4.00004ZM5.33333 1.33337H7.33333V14.6667H5.33333V1.33337ZM1.33333 5.33337H3.33333V10.6667H1.33333V5.33337Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveIcon;
