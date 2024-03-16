import { getPoster } from '../../../utils/images';
import HeroActions from '../../hero-actions/hero-actions';
import { Genres } from '../../genres';
import HeroDescription from '../hero-description/hero-description';
import heroStyles from './hero-content-container.module.css';

export default function HeroContentContainer({
  picture,
  title,
  tags,
  description,
  year,
  additional = '',
}) {
  return (
    <div className={heroStyles['hero-content-wrapper']}>
      <div className={heroStyles['hero-left-section']}>
        <span className={heroStyles['hero-image-wrapper']}>
          <picture>
            <img
              className={heroStyles['hero-image']}
              src={getPoster(picture, 3)}
              alt='Poster'
            />
          </picture>
        </span>
        <HeroActions />
      </div>
      <div className={heroStyles['hero-content']}>
        <div className={heroStyles['hero-content-header']}>
          <h2 className={heroStyles['hero-title']}>
            {title} ({year})
          </h2>
          {<span className={heroStyles['additional-info']}>{additional}</span>}
        </div>
        <Genres tags={tags} />
        <HeroDescription description={description} />
      </div>
    </div>
  );
}
