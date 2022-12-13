import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const ShuffleIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size}>
        <path d="M13.586 17l-8-8H3V7h3.414l8 8H17v2h-3.414zM3 15h2.586l2.207-2.207 1.414 1.414-2.501 2.501-.293.292H3v-2zm14-6h-2.586l-2.207 2.207-1.414-1.414L13.586 7H17v2zm4 7l-4 3v-6l4 3zm0-8l-4 3V5l4 3z"></path>
      </svg>
    </div>
  );
};

export default ShuffleIcon;
