import React from 'react';
import FollowIcon from '../Icon/FollowIcon';
import HeartIcon from '../Icon/HeartIcon';
import MenuPlayerIcon from '../Icon/MenuPlayerIcon';
import NextIcon from '../Icon/NextIcon';
import PlayIcon from '../Icon/PlayIcon';
import PrevIcon from '../Icon/PrevIcon';
import RepeatIcon from '../Icon/RepeatIcon';
import ShuffleIcon from '../Icon/ShuffleIcon';
import VolumeMaxIcon from '../Icon/VolumeMaxIcon';

type Props = {};

const PlayerMain = (props: Props) => {
  const play = () => {
    const audio = document.querySelector('.audio-main') as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  };
  return (
    <div className="player-main">
      <audio
        className="audio-main"
        src="https://stream.nixcdn.com/NhacCuaTui884/KhongPhaiDangVuaDau-SonTungMTP-3753840_hq.mp3?st=CqZPZ6FDQFfkwBUrYjWV7g&e=1671034822&download=true"
      />
      <div className="player">
        <div className="player-control">
          <div className="control-btn">
            <PrevIcon />
          </div>
          <div className="control-btn" onClick={play}>
            <PlayIcon />
          </div>
          <div className="control-btn">
            <NextIcon />
          </div>
          <div className="control-btn">
            <ShuffleIcon />
          </div>
          <div className="control-btn">
            <RepeatIcon />
          </div>
        </div>
        <div className="player-progress">
          <span className="time current">1:51</span>
          <input type="range" />
          <span className="time">1:51</span>
        </div>
        <div className="player-volume">
          <div className="volume-change">
            <input type="range" className="volume" />
          </div>
          <VolumeMaxIcon size={22} />
        </div>
      </div>
      <div className="player-info">
        <img
          className="song-avt"
          src="https://cdn.pixabay.com/photo/2020/04/30/14/03/mountains-and-hills-5112952__480.jpg"
          alt=""
        />
        <div className="song-info">
          <p className="artist-name">dthanhff3108</p>
          <p className="song-name">Gio cuon em di</p>
        </div>
        <div className="song-options">
          <div className="song-options-btn">
            <HeartIcon size={20} />
          </div>
          <div className="song-options-btn">
            <FollowIcon />
          </div>
          <div className="song-options-btn">
            <MenuPlayerIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMain;
