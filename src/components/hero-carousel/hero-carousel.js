import './hero-carousel.css';
import img from '../../assets/One Piece/One Piece Wide.jpg';

export default function HeroCarousel() {
  return (
    <div className='hero-carousel-wrapper'>
      <div className='hero-carousel-arrows'>
        <button
          className='arrow'
          data-direction='backward'
          role='button'
          tabIndex='0'
          disabled=''
        >
          <img
            className='arrow-left'
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDExIj48dGl0bGU+UGF0aCAzIENvcHkgNzwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9IlYxLjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJob21lUGFnZS0tLW9uJmFtcDtPZmZTb3VyY2VzLS0tc3RhcnQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIyLjAwMDAwMCwgLTg2MC4wMDAwMDApIj48cG9seWxpbmUgaWQ9IlBhdGgtMy1Db3B5LTciIHBvaW50cz0iMzIxLjA4MSA4NjguMDgxIDMyNS41NDIgODYyLjcxOCAzMzAuMDgxIDg2OC4wODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS41ODA3NzMsIDg2NS41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjUuNTgwNzczLCAtODY1LjUwMDAwMCkiLz48L2c+PC9nPjwvc3ZnPg=='
            alt='scroll left'
          />
        </button>
      </div>

      <div className='hero-carousel-container'>
        <div className='hero-carousel-poster'>
          <picture className='hero-background'>
            {/* <div className="img-gradient"></div>  */}
            <img
              className='hero-carousel-picture'
              src={img}
              //'https://media.themoviedb.org/t/p/w1280/r9oTasGQofvkQY5vlUXglneF64Z.jpg'
              //   One Piece/One Piece Wide.jpg
              alt='One Peace'
            />
          </picture>
        </div>
        <div className='hero-card-info'>
          <a href='#' className='title text-decoration-off'>
            Title
          </a>
          <div className='hero-card-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea
            laboriosam numquam rem. Harum quis placeat dolorem? Quisquam quasi
            nesciunt culpa quibusdam ipsa quos fugit modi natus exercitationem
            facilis sit voluptatem minus enim eius blanditiis possimus aut
            repudiandae quo, molestias veritatis, ratione nihil aliquam
            necessitatibus error! Voluptate animi veritatis quas!
          </div>
          <div className='actions'>
            <div className='watch-now-wrapper'>
              <button className='watch-now-btn'>
                <span className='fa-play'></span>
                Watch Now
              </button>
            </div>
            <button className='default-button'>
              <span className='fa-plus'></span>
              Add to Watchlist
            </button>
          </div>
        </div>
        <div className='hero-carousel-pagination'>
          <button className='hero-carousel__page page-is-active'>
            <div className='hero-carousel__page-pill'>
              <span className='hero-carousel__page-loader'></span>
            </div>
          </button>
          <button className='hero-carousel__page'>
            <div className='hero-carousel__page-pill'>
              <span className='hero-carousel__page-loader'></span>
            </div>
          </button>
          <button className='hero-carousel__page'>
            <div className='hero-carousel__page-pill'>
              <span className='hero-carousel__page-loader'></span>
            </div>
          </button>
        </div>
      </div>
      <div className='hero-carousel-arrows'>
        <button
          className='arrow'
          data-direction='forward'
          role='button'
          tabIndex='0'
        >
          <img
            className='arrow-right'
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4IDExIj48dGl0bGU+UGF0aCAzIENvcHkgNzwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9IlYxLjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJob21lUGFnZS0tLW9uJmFtcDtPZmZTb3VyY2VzLS0tc3RhcnQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIyLjAwMDAwMCwgLTg2MC4wMDAwMDApIj48cG9seWxpbmUgaWQ9IlBhdGgtMy1Db3B5LTciIHBvaW50cz0iMzIxLjA4MSA4NjguMDgxIDMyNS41NDIgODYyLjcxOCAzMzAuMDgxIDg2OC4wODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS41ODA3NzMsIDg2NS41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMjUuNTgwNzczLCAtODY1LjUwMDAwMCkiLz48L2c+PC9nPjwvc3ZnPg=='
            alt='scroll right'
          />
        </button>
      </div>
    </div>
  );
}
