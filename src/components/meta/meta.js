import { Helmet } from 'react-helmet';
import { getPoster, getStill } from 'utils';

export default function Meta({ title, overview, poster_path, still_path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={overview} />
      <meta
        property='og:image'
        content={
          poster_path
            ? getPoster(poster_path, 1)
            : still_path
            ? getStill(still_path, 1)
            : '/./logo.svg'
        }
      />
      <meta property='og:image:width' content='1200' data-rh='true'></meta>
      <meta property='og:url' content={`${window.location.origin}${window.location.pathname}`} />
      <meta property='og:type' content='website' />
    </Helmet>
  );
}
