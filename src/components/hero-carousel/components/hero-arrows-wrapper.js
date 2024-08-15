import HeroCardArrow from './arrows/arrow';

export default function HeroArrowsWrapper({ children, data = [], onPrevClick, onNextClick }) {
  if (!data?.length) {
    return <>{children}</>;
  }

  return (
    <>
      <HeroCardArrow direction='left' onClick={onPrevClick} />
      {children}
      <HeroCardArrow direction='right' onClick={onNextClick} />
    </>
  );
}
