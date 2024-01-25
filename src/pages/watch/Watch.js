import './watch.css';

import upNexImg from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import upPrevImg from '../../assets/One Piece/episodes/one-peace-1-2.jpeg';
import ReactPlayer from 'react-player';

export default function WatchPage() {
  return (
    <>
      <div className='watch-wrapper'>
        <div className='player-container'>
          <ReactPlayer
            url='https://cdn4573.vb24131crasosnemesis.com/stream2/cdn-400/8e93f2e41d9aa6c8d265bdcb958d3be4/MJTMsp1RshGTygnMNRUR2N2MSlnWXZEdMNDZzQWe5MDZzMmdZJTO1R2RWVHZDljekhkSsl1VwYnWtx2cihVT250RRpnWUt2dNRVV1klaOtmWtpUbNpXRy4ERWlWW6dmeNp2Z6llajJTT6lVP:1706178870:35.155.107.187:e93d252731dae4f859ca0b6b5b913358ab2dd187e6058ddd973904e6f5ebdf61/index.m3u8'
            width='100%'
            height='100%'
            controls={true}
          ></ReactPlayer>
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
          <div className='tags'>
            <span className='tag single-card-tag'>Action</span>
            <span className='tag single-card-tag'>Adventure</span>
            <span className='tag single-card-tag'>Comedy</span>
            <span className='tag single-card-tag'>Fantasy</span>
            <span className='tag single-card-tag'>Show</span>
            <span className='tag single-card-tag'>Super Power</span>
          </div>

          <div className='watch-actions'>
            <span className='watch-action'>
              <i className='fa-thumbs-up'></i> <span>10</span>
            </span>
            <span className='watch-action'>
              <i className='fa-thumbs-down'></i> <span>10</span>
            </span>
          </div>
          <div className='description content-description'>
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

                  <p className='description'>20m</p>
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

                  <p className='description'>20m</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
