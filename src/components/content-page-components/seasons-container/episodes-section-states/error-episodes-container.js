import EpisodesStateContainer from './episodes-state-container';

export default function ErrorEpisodesContainer({ message }) {
  return (
    <EpisodesStateContainer>
      <div>{message}</div>
    </EpisodesStateContainer>
  );
}
