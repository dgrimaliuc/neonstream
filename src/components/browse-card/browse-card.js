import './browse-card.css';

export default function BrowseCard() {
  return (
    <div>
      <div className='browse-card'>
        <a href='#' className='browse-card-body text-decoration-off'>
          <div className='browse-card-poster'>
            <div className='browse-card-hover'>
              <i className='fa-play' />
            </div>
            <picture>
              <img
                className='browse-card-poster'
                src='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
                alt=' The Big Bang Theory Poster'
              />
            </picture>
          </div>
          <div className='browse-card-info'>
            <p>
              <div>The Big Bang Theory</div> 2006
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
