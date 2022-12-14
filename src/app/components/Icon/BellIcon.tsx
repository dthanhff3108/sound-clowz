import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const BellIcon = (props: Props) => {
  const { size = 15, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 14 15" version="1.1">
        <g id="Page-1" stroke="none">
          <g id="Top-Bar" transform="translate(-2131.000000, -540.000000)">
            <path
              d="M2132,549.666382 L2132,545.5 C2132,542.468615 2134.46615,540 2137.5083,540 L2138.4917,540 C2141.54266,540 2144,542.458712 2144,545.491686 C2144,545.491686 2144,546.483923 2144,549.666382 C2144.60891,550.217509 2145,551.06008 2145,552 L2142.9913,552 L2133.0087,552 L2131,552 C2131,551.06008 2131.39109,550.217509 2132,549.666382 Z M2135,553 L2136.01224,554.083625 C2136.01224,554.083625 2137.3339,555 2138.00407,555 C2138.63265,555 2140.01916,554.018655 2140.01916,554.018655 L2141,553 L2135,553 Z"
              id="Notifications"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BellIcon;
