import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const HeartIcon = (props: Props) => {
  const { size = 16, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 16 16">
        <g fillRule="evenodd">
          <path d="M10.8049818,3 C8.78471579,3 8.00065285,5.34486486 8.00065285,5.34486486 C8.00065285,5.34486486 7.21296387,3 5.19604494,3 C3.49431318,3 1.748374,4.09592694 2.03008996,6.51430532 C2.37372765,9.46673775 7.75491917,12.9928738 7.99310958,13.0010557 C8.23129998,13.0092378 13.7309828,9.2785378 13.981459,6.5012405 C14.1878647,4.20097023 12.5067136,3 10.8049818,3 Z"></path>
        </g>
      </svg>
    </div>
  );
};

export default HeartIcon;
