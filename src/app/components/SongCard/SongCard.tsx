import React from 'react';
import PlayIcon from '../Icon/PlayIcon';
import './SongCard.scss';
import HeartIcon from 'app/components/Icon/HeartIcon';
import RepostIcon from './../Icon/RepostIcon';
import CommentIcon from '../Icon/CommentIcon';
import MoreIcon from './../Icon/MoreIcon';
import PlayAlbumIcon from '../Icon/PlayAlbumIcon';
type Props = {};

const SongCard = (props: Props) => {
  return (
    <div className="song-card">
      <div className="song-img">
        <div className="song-player">
          <PlayAlbumIcon />
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelBigqrdiZHkWeDVKxu-Tq2glyBX5QQFxYg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="song-about">
        <p className="artist">Mck x Tli</p>
        <p className="name">tai vi sao #dee mic ssddaad</p>
        <div className="options">
          <div className="option-item">
            <PlayIcon size={12} />
            <span>3.23M</span>
          </div>
          <div className="option-item">
            <HeartIcon size={12} />
            <span>3.23M</span>
          </div>
          <div className="option-item">
            <RepostIcon size={12} />
            <span>3.23M</span>
          </div>
          <div className="option-item">
            <CommentIcon size={12} />
            <span>3.23M</span>
          </div>
        </div>
      </div>
      <div className="song-more">
        <div className="more-icon">
          <HeartIcon size={12} />
        </div>
        <div className="more-icon">
          <MoreIcon size={12} />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
