import { Helmet } from 'react-helmet';
import { getPoster, getStill } from 'utils';

export default function Meta({ title, overview, poster_path, still_path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={overview} />
      <meta name='title' content={title} />
      <meta name='description' content={overview} />
      <meta
        property='og:image'
        content={
          poster_path
            ? getPoster(poster_path, 3)
            : still_path
            ? getStill(still_path, 2)
            : `${window.location.origin}/logo.svg`
        }
      />
      <meta property='og:url' content={`${window.location.origin}${window.location.pathname}`} />
      <meta property='og:type' content='website' />
    </Helmet>
  );
}
