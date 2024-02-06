import './browse-card.css';

export default function BrowseCard({ title, poster, type }) {
  if (!poster) return;

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
                // to change base url with config base_url
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster}`}
                alt={title}
              />
            </picture>
          </div>
          <div className='browse-card-info'>
            <p>
              <span>{title}</span> 2006
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
