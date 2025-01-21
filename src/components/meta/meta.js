import { Helmet } from 'react-helmet';
import { getPoster, getStill } from 'utils';

export default function Meta({ title, overview, poster_path, still_path }) {
  return (
    <Helmet>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={overview} />
      <meta
        property='og:image'
        content={poster_path ? getPoster(poster_path, 3) : getStill(still_path, 2)}
      />
    </Helmet>
  );
}
