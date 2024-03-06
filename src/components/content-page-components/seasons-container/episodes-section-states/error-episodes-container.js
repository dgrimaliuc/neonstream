import Spinner from '../../../spinner/spinner';
import EpisodesStateContainer from './episodes-state-container';

export default function LoadingEpisodesContainer({ message }) {
  return (
    <EpisodesStateContainer>
      <Spinner display />
    </EpisodesStateContainer>
  );
}
