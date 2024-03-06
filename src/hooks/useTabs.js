import { useState } from 'react';

export function useTabs(total) {
  const [selected, setSelected] = useState(0);

  function select(id) {
    if (id === selected) return;
    setSelected(id);
  }

  function nextPage() {
    if (selected + 1 >= total) {
      select(0);
    } else {
      select(selected + 1);
    }
  }

  function prevPage() {
    if (selected <= 0) {
      select(total - 1);
    } else {
      select(selected - 1);
    }
  }

  return { selected, select, prevPage, nextPage };
}
