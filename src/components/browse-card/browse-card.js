import { getPoster, getYear } from '../../utils';
import Image from '../lazy-image/lazy-image';
import './browse-card.css';

export default function BrowseCard({ title, poster, to, date }) {
  if (!poster) return;

  return (
    <div>
      <div className='browse-card'>
        <a href={to} className='browse-card-body text-decoration-off'>
          <div className='browse-card-poster'>
            <div className='browse-card-hover'>
              <i className='fa-play' />
            </div>
            <picture>
              <Image
                className='browse-card-poster'
                src={getPoster(poster)}
                alt={title}
              />
            </picture>
          </div>
          <div className='browse-card-info'>
            <p>
              <span>{title}</span> ({getYear(date)})
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
