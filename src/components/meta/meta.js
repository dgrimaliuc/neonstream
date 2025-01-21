import { Helmet } from 'react-helmet';
// import { getPoster, getStill } from 'utils';

export default function Meta({ title, overview, poster_path, still_path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={overview} />
      <meta
        property='og:image'
        content='https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/93216d743b442175f0a06e5693ae4439.jpg'
      />
      {/* <meta property='og:image' content={`${window.location.origin}/logo.svg`} /> */}
      <meta property='og:image:width' content='1200' data-rh='true'></meta>
      {/* poster_path
            ? getPoster(poster_path, 1)
            : still_path
            ? getStill(still_path, 1)
            : */}

      <meta property='og:url' content={`${window.location.origin}${window.location.pathname}`} />
      <meta property='og:type' content='website' />
    </Helmet>
  );
}
