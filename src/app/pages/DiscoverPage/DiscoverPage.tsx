import Album from 'app/components/Album/Album';
import ArtistCard from 'app/components/ArtistCard/ArtistCard';
import Button from 'app/components/Button/Button';
import ArrowIcon from 'app/components/Icon/ArrowIcon';
import HeartIcon from 'app/components/Icon/HeartIcon';
import MemberIcon from 'app/components/Icon/MemberIcon';
import SongCard from 'app/components/SongCard/SongCard';
import SongLine from 'app/components/SongLine/SongLine';
import React, { useRef } from 'react';
import './DiscoverPage.scss';

type Props = {};

const DiscoverPage = (props: Props) => {
  const listRef = useRef<HTMLDivElement>(null);
  const handleNextList = () => {
    if (listRef.current) {
      listRef.current.style.transform = 'translate3d(-100%,0,0)';
    }
  };
  const handlePrevList = () => {
    if (listRef.current) {
      listRef.current.style.transform = 'translate3d(100px,0,0)';
    }
  };
  return (
    <div className="wrapper">
      <div className="content">
        <ul className="discover">
          <li className="charts-top">
            <h2 className="title">Chart: Top 50</h2>
            <p className="desc">The most played tracks on SoundCloud this week</p>
            <div className="album-list-wrapper">
              <div className="album-list-container">
                <div className="album-btn next" onClick={handleNextList}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="album-btn prev" onClick={handlePrevList}>
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="album-list" ref={listRef}>
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                </div>
              </div>
            </div>
          </li>
          <li className="more">
            <h2 className="title">Recently Played</h2>
            <div className="more-container">
              <div className="more-thumb">
                <img
                  src="https://i1.sndcdn.com/artworks-arld4UsR6saavHw1-L9J76Q-t500x500.jpg"
                  alt=""
                />
              </div>
              <div className="more-list">
                <SongLine />
                <SongLine />
                <SongLine />
                <SongLine />
                <SongLine />
                <SongLine />
                <SongLine />
                <SongLine />
              </div>
            </div>
            <div className="more-inspired">
              <div className="inspired">
                <div className="inspired-avt">
                  <img
                    src="https://i1.sndcdn.com/avatars-KCmzKft0di7mTc9F-wUbk5w-t120x120.jpg"
                    alt=""
                  />
                </div>
                <div className="inspired-avt">
                  <img
                    src="https://i1.sndcdn.com/avatars-KCmzKft0di7mTc9F-wUbk5w-t120x120.jpg"
                    alt=""
                  />
                </div>
                <div className="inspired-avt">
                  <img
                    src="https://i1.sndcdn.com/avatars-KCmzKft0di7mTc9F-wUbk5w-t120x120.jpg"
                    alt=""
                  />
                </div>
                <p>Inspired by vahn, ihavea song and more</p>
              </div>
              <Button>Go to playlist</Button>
            </div>
          </li>
          <li className="daily">
            <h2 className="title">More of what you like</h2>
            <div className="album-list-wrapper">
              <div className="album-list-container">
                <div className="album-btn next" onClick={handleNextList}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="album-btn prev">
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="album-list">
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                </div>
              </div>
            </div>
            <div className="more-inspired">
              <Button>Go to playlist</Button>
            </div>
          </li>
          <li className="mixed"></li>
          <li className="charts-new"></li>
          <li className="weekly"></li>
        </ul>
      </div>
      <div className="side-bar">
        <div className="side-bar-item">
          <div className="side-bar-header">
            <div className="header-title">
              <MemberIcon size={18} />
              <p>Artists you should follow</p>
            </div>
            <div className="header-option">
              <i className="fa-solid fa-rotate-right"></i>
              <p>Refresh list</p>
            </div>
          </div>
          <div className="side-bar-content">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </div>

        <div className="side-bar-item">
          <div className="side-bar-header">
            <div className="header-title">
              <HeartIcon size={18} />
              <p>2 likes</p>
            </div>
            <div className="header-option">
              <p>View all</p>
            </div>
          </div>
          <div className="side-bar-content">
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
          </div>
        </div>

        <div className="side-bar-item">
          <div className="side-bar-header">
            <div className="header-title">
              <i className="fa-regular fa-calendar"></i>
              <p>Listening history</p>
            </div>
            <div className="header-option">
              <p>View all</p>
            </div>
          </div>
          <div className="side-bar-content">
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
          </div>
        </div>

        <div className="side-bar-item">
          <div className="side-bar-header">
            <div className="header-title">
              <p>Go mobile</p>
            </div>
          </div>
          <div className="side-bar-content">Language</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
