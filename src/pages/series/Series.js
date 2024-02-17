import BrowseCollection from '../../components/carousel/browse_collection';
import BackgroundPicture from '../../components/content-page-components/background-picture/background-picture';

import ContentHeader from '../../components/content-page-components/content-header/content-header';
import HeroContentContainer from '../../components/content-page-components/hero-content-container/hero-content-container';
import SeasonsContainer from '../../components/content-page-components/seasons-container/seasons-container';

export default function SeriesPage() {
  return (
    <>
      <BackgroundPicture />
      <ContentHeader />
      <HeroContentContainer />
      <SeasonsContainer />
      <section>
        <BrowseCollection type='recommended_series' />
      </section>
    </>
  );
}
