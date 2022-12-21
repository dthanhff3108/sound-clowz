import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const PlayAlbumIcon = (props: Props) => {
  const { size = 16, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, 'play-special', className)}>
      <svg width={size} height={size} viewBox="0 0 18 29">
        <g fill="#fff">
          <g transform="translate(-1665.000000, -818.000000)">
            <path d="M1665,847 L1669.15385,832.5 L1665,818 L1683,832.5 L1665,847 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PlayAlbumIcon;
