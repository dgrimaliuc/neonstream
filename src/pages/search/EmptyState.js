import styles from './search.module.css';
import stars from '../../assets/icons/stars.png';
const states = {
  onOpen: {
    title: 'Ready to dive in?',
    description: 'Start your search to explore a world of amazing content.',
  },
  onNoResults: {
    title: 'No results found',
    description:
      "Sorry, we couldn't find any results for your search. Try again with a different query.",
  },
};
export default function EmptyState({ isInitial, hasNoResults }) {
  const state = isInitial ? states.onOpen : hasNoResults ? states.onNoResults : null;
  if (!state) return null;
  return (
    <div className={styles['empty-state-wrapper']}>
      <img className={styles['stars']} src={stars} alt='Stars' />
      <h2>{state.title}</h2>
      <div className={styles['description']}>{state.description}</div>
    </div>
  );
}
