import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const PlayIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size}>
        <path d="M8 5v14l11-7z"></path>
      </svg>
    </div>
  );
};

export default PlayIcon;
