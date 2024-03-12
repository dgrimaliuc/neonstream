import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

import SinglePromoCardWrapper from './single-promo-card-wrapper';
import { AnimatedContainer } from './animated-container';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
// import { useImagesLoader, useSingleContentLoader } from '../../hooks';
// import { useMemo } from 'react';

export default function SinglePromoCardViolet({
  id = 1,
  mediaType = '',
  firstImageIndex = 0,
  secondImageIndex = 2,
}) {
  // const extraParams = useMemo(() => {
  //   return {
  //     append_to_response: 'images',
  //     language: 'en-US',
  //     include_image_language: 'en',
  //   };
  // }, []);
  // const { loading, data, error } = useSingleContentLoader(
  //   id,
  //   mediaType,
  //   extraParams
  // );

  // if (loading) {
  //   return null;
  // }

  // const {
  //   loading: imgAreLoading,
  //   data: imagesData,
  //   error: imagesError,
  // } = useImagesLoader();

  return (
    <SinglePromoCardWrapper>
      <AnimatedContainer
        topClassName='border-box-violet'
        bottomClassName='border-box-violet-reverse'
      />
      <SingleCardsImageWrapper
        topImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        bottomImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        className='single-card-image-violet'
      />
    </SinglePromoCardWrapper>
  );
}
