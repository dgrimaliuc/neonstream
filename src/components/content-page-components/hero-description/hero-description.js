import { ExpandContainer } from '../../expand';
import styles from './hero-description.module.css';

export default function HeroDescription({
  description = 'Description not present',
}) {
  return (
    <ExpandContainer
      className={styles['description-wrapper']}
      title='Overview'
      useGradient
      sectionExpandMode
      allowExpand={false}
    >
      <div className={styles['description-container']}>
        <p>{description}</p>
      </div>
    </ExpandContainer>
  );
}
