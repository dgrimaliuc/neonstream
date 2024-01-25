import { useState } from 'react';

const useFocused = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return [isFocused, handleFocus, handleBlur];
};

export default useFocused;
