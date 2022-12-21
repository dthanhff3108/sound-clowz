import React from 'react';
import HeartIcon from '../Icon/HeartIcon';
import MoreIcon from '../Icon/MoreIcon';
import PlayAlbumIcon from '../Icon/PlayAlbumIcon';
import './Album.scss';

type Props = {};

const Album = (props: Props) => {
  return (
    <div className="chart">
      <div className="chart-thumb">
        <img src="https://i1.sndcdn.com/artworks-arld4UsR6saavHw1-L9J76Q-t500x500.jpg" alt="" />
        <div className="chart-control">
          <PlayAlbumIcon size={24} />
          <div className="chart-control-bottom">
            <HeartIcon />
            <MoreIcon />
          </div>
        </div>
      </div>
      <p className="chart-name">All music genres</p>
      <p className="chart-desc">Top 50</p>
    </div>
  );
};

export default Album;
