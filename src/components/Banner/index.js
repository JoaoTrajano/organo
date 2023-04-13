import React from 'react';
import './banner.css';
import BannerHeader from '../../assets/imagens/banner.png';

function Banner() {
  return (
    <div className="banner">
      <img src={BannerHeader} alt="banner" />
    </div>
  );
}

export default Banner;
