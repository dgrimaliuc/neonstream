import { Spinner } from '../../../spinner';
import EpisodesStateContainer from './episodes-state-container';

export default function LoadingEpisodesContainer() {
  return (
    <EpisodesStateContainer>
      <Spinner display />
    </EpisodesStateContainer>
  );
}
