import './watch.css';
import upNexImg from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import upPrevImg from '../../assets/One Piece/episodes/one-peace-1-2.jpeg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Tags from '../../components/tags/tags';
import VidsrcPlayer from '../../components/player/vidsrcPlayer';

export default function WatchPage() {
  return (
    <>
      <div className='watch-wrapper'>
        <div className='player-container'>
          <VidsrcPlayer url='https://vidsrc.to/embed/movie/940551' />
        </div>
      </div>
      <div className='watch-info-wrapper'>
        <div className='media-info-container'>
          <div className='media-info-header'>
            <a className='content-title-container' href='#'>
              <div className='content-title'>Series title</div>
            </a>
            <span>
              <span>
                4.9 <span className='icon-star-small'></span> (286.9K)
              </span>
            </span>
          </div>
          <Tags />

          <div className='watch-actions'>
            <span className='watch-action'>
              <i className='fa-thumbs-up'></i> <span>10</span>
            </span>
            <span className='watch-action'>
              <i className='fa-thumbs-down'></i> <span>10</span>
            </span>
          </div>
          <div className='description-wrapper content-description'>
            <div className='description-gradient'>
              <div className='description-gradient-length'>
                <div className='description-container'>
                  <p>
                    Monkey. D. Luffy refuses to let anyone or anything stand in
                    the way of his quest to become the king of all pirates. With
                    a course charted for the treacherous waters of the Grand
                    Line and beyond, this is one captain who'll never give up
                    until he's claimed the greatest treasure on Earth: the
                    Legendary One Piece!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='up-next-episodes'>
          <div className='up-next-episode'>
            <a href='#' className='container-header'>
              <span className='up-next-header-text'>Next Episode</span>
            </a>
            <a className='up-next-episode-body' href='#'>
              <div className='up-next-image-container'>
                <img className='up-next-image' src={upNexImg} alt='' />
              </div>
              <div className='up-next-info'>
                <div className='up-next-info-box'>
                  <h5>Episode title</h5>

                  <p className='description-wrapper'>20m</p>
                </div>
              </div>
            </a>
          </div>
          <div className='up-next-episode'>
            <a href='#' className='container-header'>
              <span className='up-next-header-text'>Previous Episode</span>
            </a>
            <a className='up-next-episode-body' href='#'>
              <div className='up-next-image-container'>
                <img className='up-next-image' src={upPrevImg} alt='' />
              </div>
              <div className='up-next-info'>
                <div className='up-next-info-box'>
                  <h5>Episode title</h5>

                  <p className='description-wrapper'>20m</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
