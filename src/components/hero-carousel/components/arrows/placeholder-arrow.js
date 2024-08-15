import classes from './arrow.module.css';
export default function PlaceholderHeroCardArrow({ direction }) {
  if (direction !== 'right' && direction !== 'left') {
    return <div>Wrong arrow direction</div>;
  }

  return (
    <div className={classes['hero-carousel-arrows']}>
      <div className={`${classes.arrow}  ${classes.placeholder}`} role='button'>
        <img
          className={`${classes['arrow-' + direction]}`}
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDExIj48dGl0bGU+UGF0aCAzIENvcHkgNzwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9IlYxLjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJob21lUGFnZS0tLW9uJmFtcDtPZmZTb3VyY2VzLS0tc3RhcnQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIyLjAwMDAwMCwgLTg2MC4wMDAwMDApIj48cG9seWxpbmUgaWQ9IlBhdGgtMy1Db3B5LTciIHBvaW50cz0iMzIxLjA4MSA4NjguMDgxIDMyNS41NDIgODYyLjcxOCAzMzAuMDgxIDg2OC4wODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS41ODA3NzMsIDg2NS41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjUuNTgwNzczLCAtODY1LjUwMDAwMCkiLz48L2c+PC9nPjwvc3ZnPg=='
          alt={'Scroll' + direction}
        />
      </div>
    </div>
  );
}
