import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const CommentIcon = (props: Props) => {
  const { size = 16, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg width={size} height={size} viewBox="0 0 16 16">
        <g stroke="none" stroke-width="1" fillRule="evenodd">
          <g>
            <path d="M4.99961498,3 C3.89525812,3 3,3.88655484 3,5.00591905 L3,7.99408095 C3,9.10191945 3.88743329,10 4.99961498,10 L11.000385,10 C12.1047419,10 13,9.11344516 13,7.99408095 L13,5.00591905 C13,3.89808055 12.1125667,3 11.000385,3 L4.99961498,3 Z M5,10 L5,13 L8,10 L5,10 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CommentIcon;
