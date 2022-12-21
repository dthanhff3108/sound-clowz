import React from 'react';
import Button from '../Button/Button';
import MemberIcon from '../Icon/MemberIcon';
import WaveIcon from '../Icon/WaveIcon';
import './ArtistCard.scss';
type Props = {};

const ArtistCard = (props: Props) => {
  return (
    <div className="artist-card">
      <div className="artist-about">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRex7sIWzXZCZF09MioICPVHN3e7gexDzKDKBckIWMvoYF61tKvziNQRzRDymjQj5Fqo&usqp=CAU"
          alt=""
        />
        <div className="artist-info">
          <p>dThanhff</p>
          <div className="info-song">
            <div className="member">
              <MemberIcon size={14} />
              30.6k
            </div>
            <div className="track">
              <WaveIcon size={11} />
              18
            </div>
          </div>
        </div>
      </div>
      <Button size="small">
        <div className="artist-follow">
          <i className="follow-icon fa-solid fa-user-plus"></i>Follow
        </div>
      </Button>
    </div>
  );
};

export default ArtistCard;
