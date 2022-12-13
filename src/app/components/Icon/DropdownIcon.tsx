import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const DropdownIcon = (props: Props) => {
  const { size = 48, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 8 5">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <g transform="translate(-2066.000000, -545.000000)">
            <path d="M2067,545.022746 L2066,546.022746 L2069.95476,549.977511 L2073.97751,545.954765 L2072.97751,544.954765 L2069.95476,547.977511 L2067,545.022746 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default DropdownIcon;
