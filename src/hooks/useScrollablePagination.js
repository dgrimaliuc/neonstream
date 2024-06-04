import { useState } from 'react';

export function useScrollablePagination(
  total,
  containerClass,
  activeClass,
  firstPage = 1,
  initialSelected = 1,
) {
  const [selected, setSelected] = useState(initialSelected);

  function select(id) {
    if (id === selected) return;
    setSelected(id);
  }

  function scrollToLeft() {
    const container = document.getElementsByClassName(containerClass)[0];
    const element = document.getElementsByClassName(activeClass)[0];
    if (container && element) {
      const elementOffsetLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerOffSetLeft = container.offsetLeft;
      container.scrollTo({
        left: elementWidth + (elementOffsetLeft - containerOffSetLeft),
        behavior: 'smooth',
      });
    }
  }

  function scrollToRight() {
    const container = document.getElementsByClassName(containerClass)[0];
    const element = document.getElementsByClassName(activeClass)[0];
    if (container && element) {
      const elementOffsetLeft = element.offsetLeft;
      const containerWidth = container.offsetWidth;
      const containerOffSetLeft = container.offsetLeft;
      container.scrollTo({
        left: elementOffsetLeft - containerOffSetLeft - containerWidth,
        behavior: 'smooth',
      });
    }
  }

  function iterator(callback) {
    return Array.from({ length: total }).map((_, i) => callback(i));
  }

  function nextPage(scroll = true) {
    if (selected === total) return;
    select(selected + 1);
    if (scroll) {
      scrollToLeft();
    }
  }

  function prevPage(scroll = true) {
    if (selected === firstPage) return;
    select(selected - 1);
    if (scroll) {
      scrollToRight();
    }
  }

  return { selected, select, iterator, prevPage, nextPage };
}
