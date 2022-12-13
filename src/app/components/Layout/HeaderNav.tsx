import React from 'react';
import { Link } from 'react-router-dom';
import BellIcon from '../Icon/BellIcon';
import DropdownIcon from '../Icon/DropdownIcon';
import LogoIcon from '../Icon/LogoIcon';
import MailIcon from '../Icon/MailIcon';
import SearchIcon from '../Icon/SearchIcon';
import MoreIcon from '../Icon/MoreIcon';
type Props = {};

const HeaderNav = (props: Props) => {
  return (
    <div className="header">
      <ul className="header-nav">
        <li>
          <Link to="">
            <LogoIcon size={50} />
          </Link>
        </li>
        <li className="nav-btn">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-btn">
          <Link to="/feed">Feed</Link>
        </li>
        <li className="nav-btn">
          <Link to="/library">Library</Link>
        </li>
      </ul>
      <div className="header-search">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <SearchIcon size={25} />
        </div>
      </div>
      <ul className="header-options">
        <div className="header-options-actions">
          <Link to="">Try Next Pro</Link>
          <Link to="">Upload</Link>
        </div>
        <div className="header-options-user">
          <Link to="">
            <img
              className="user-avt"
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/317357390_3319406291651612_6092566078410516644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gRw8PifZsSEAX_EfqR0&tn=N5pqDwOnyuhBDfJB&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCyVjVmFC-WQSRTzNPO19Z9plqnCXrjeb2OXBBSMvcGyQ&oe=639AEC20"
              alt=""
            />
            <p className="user-name">d.thanh3108</p>
            <DropdownIcon size={12} />
          </Link>
        </div>
        <ul className="header-options-more">
          <li className="options-btn">
            <Link to="">
              <BellIcon size={18} />
            </Link>
          </li>
          <li className="options-btn">
            <Link to="">
              <MailIcon size={20} />
            </Link>
          </li>
          <li className="options-btn">
            <Link to="">
              <MoreIcon size={20} />
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default HeaderNav;
