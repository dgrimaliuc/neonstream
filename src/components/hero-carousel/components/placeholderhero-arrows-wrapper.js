import PlaceholderHeroCardArrow from './arrows/placeholder-arrow';

export default function PlaceholderHeroArrowsWrapper({ children }) {
  return (
    <>
      <PlaceholderHeroCardArrow direction='left' />
      {children}
      <PlaceholderHeroCardArrow direction='right' />
    </>
  );
}
