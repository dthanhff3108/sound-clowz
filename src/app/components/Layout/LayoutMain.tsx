import React from 'react';
import HeaderNav from './HeaderNav';
import './Layout.scss';
import PlayerMain from './PlayerMain';

type Props = {
  children: React.ReactNode;
};

const LayoutMain = ({ children }: Props) => {
  return (
    <div className="wrapper-layout">
      <HeaderNav />
      <div className="wrapper-content">{children}</div>
      <PlayerMain />
    </div>
  );
};

export default LayoutMain;
