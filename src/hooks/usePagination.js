import { useState } from 'react';

export function usePagination(total, initialSelected = 0) {
  const [selected, setSelected] = useState(initialSelected);

  function select(id) {
    if (id === selected) return;
    setSelected(id);
  }

  function iterator(callback) {
    return Array.from({ length: total }).map((_, i) => callback(i));
  }

  function nextPage() {
    if (selected === total) return;
    select(selected + 1);
  }

  function prevPage() {
    if (selected === 0) return;
    select(selected - 1);
  }

  return { selected, select, iterator, prevPage, nextPage };
}
