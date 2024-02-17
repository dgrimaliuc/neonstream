import styles from './pagination.module.css';

import { usePagination } from '../../hooks/usePagination';
import Buble from './buble';

export default function Pagination({ total = 50 }) {
  const { selected, select, iterator, prevPage, nextPage } = usePagination(
    total,
    styles.bubles,
    styles.active
  );

  return (
    <div className={styles['paginator-container']}>
      <span className={styles['left-arrow']} onClick={prevPage}>
        <img
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDExIj48dGl0bGU+UGF0aCAzIENvcHkgNzwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9IlYxLjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJob21lUGFnZS0tLW9uJmFtcDtPZmZTb3VyY2VzLS0tc3RhcnQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIyLjAwMDAwMCwgLTg2MC4wMDAwMDApIj48cG9seWxpbmUgaWQ9IlBhdGgtMy1Db3B5LTciIHBvaW50cz0iMzIxLjA4MSA4NjguMDgxIDMyNS41NDIgODYyLjcxOCAzMzAuMDgxIDg2OC4wODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS41ODA3NzMsIDg2NS41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjUuNTgwNzczLCAtODY1LjUwMDAwMCkiLz48L2c+PC9nPjwvc3ZnPg=='
          alt='previous'
          className={styles.arrow}
        />
      </span>
      <div className={styles.bubles}>
        {iterator((i) => (
          <Buble
            key={i}
            title={i}
            isSelected={selected === i}
            onClick={select.bind(null, i)}
          />
        ))}
      </div>
      <span className={styles['right-arrow']} onClick={nextPage}>
        <img
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDExIj48dGl0bGU+UGF0aCAzIENvcHkgNzwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9IlYxLjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJob21lUGFnZS0tLW9uJmFtcDtPZmZTb3VyY2VzLS0tc3RhcnQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIyLjAwMDAwMCwgLTg2MC4wMDAwMDApIj48cG9seWxpbmUgaWQ9IlBhdGgtMy1Db3B5LTciIHBvaW50cz0iMzIxLjA4MSA4NjguMDgxIDMyNS41NDIgODYyLjcxOCAzMzAuMDgxIDg2OC4wODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS41ODA3NzMsIDg2NS41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjUuNTgwNzczLCAtODY1LjUwMDAwMCkiLz48L2c+PC9nPjwvc3ZnPg=='
          alt='next'
          className={styles.arrow}
        />
      </span>
    </div>
  );
}
