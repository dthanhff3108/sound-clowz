import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const RepostIcon = (props: Props) => {
  const { size = 16, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 16 16">
        <g id="Page-1" stroke="none" stroke-width="1" fillRule="evenodd">
          <g id="repost-">
            <path d="M2,6 L2,11.000385 C2,12.1047419 2.90195036,13 4.0085302,13 L10.9957349,13 L10.9957349,13 L10,13 L10,13 L8,11 L4,11 L4,6 L3.5,6 L6,6 L3,3 L0,6 L2,6 L2,6 Z M6,3 L5.0042651,3 L11.9914698,3 C13.0980496,3 14,3.89525812 14,4.99961498 L14,10 L12,10 L12,5 L8,5 L6,3 Z M16,10 L10,10 L13,13 L16,10 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RepostIcon;
