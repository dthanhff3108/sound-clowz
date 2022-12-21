import React from 'react';
import HeartIcon from '../Icon/HeartIcon';
import MoreIcon from '../Icon/MoreIcon';
import PlayIcon from '../Icon/PlayIcon';
import RepostIcon from '../Icon/RepostIcon';
import './SongLine.scss';
type Props = {};

const SongLine = (props: Props) => {
  return (
    <div className="song-line">
      <div className="song-line-info">
        <p>real love by me </p>
        <p> A tuwj do tu riai hii chao vier skdksskdskaaadsfsdf skdskd </p>
      </div>
      <div className="song-line-control">
        <div className="view">
          <PlayIcon size={16} />
          <p>1.37M</p>
        </div>
        <div className="control">
          <div className="control-item">
            <HeartIcon size={12} />
          </div>
          <div className="control-item">
            <RepostIcon size={12} />
          </div>
          <div className="control-item">
            <i className="fa-solid fa-share-from-square"></i>
          </div>
          <div className="control-item">
            <i className="fa-solid fa-link"></i>
          </div>
          <div className="control-item">
            <MoreIcon size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongLine;
