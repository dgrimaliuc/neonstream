import { getPoster } from '../../../utils/images';
import HeroActions from '../../hero-actions/hero-actions';
import Tags from '../../tags/tags';
import HeroDescription from '../hero-description/hero-description';
import heroStyles from './hero-content-container.module.css';

export default function HeroContentContainer({
  picture,
  title,
  tags,
  description,
  year,
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
          <span className={heroStyles['watched-by']}>8.7K views </span>
        </div>
        <Tags tags={tags} />
        <HeroDescription description={description} />
      </div>
    </div>
  );
}
