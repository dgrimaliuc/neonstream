import { getPoster } from '../../utils/images';
import './browse-card.css';

export default function BrowseCard({ title, poster }) {
  if (!poster) return;

  return (
    <div>
      <div className='browse-card'>
        <a href='/' className='browse-card-body text-decoration-off'>
          <div className='browse-card-poster'>
            <div className='browse-card-hover'>
              <i className='fa-play' />
            </div>
            <picture>
              <img
                className='browse-card-poster'
                src={getPoster(poster)}
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
