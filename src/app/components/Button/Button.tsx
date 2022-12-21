import React, { ReactNode } from 'react';
import './Button.scss';
type Props = {
  children: ReactNode;
  size?: 'small' | 'normal' | 'big';
};

const Button = ({ children, size = 'normal' }: Props) => {
  return <button className={`button-common ${size}`}>{children}</button>;
};

export default Button;
