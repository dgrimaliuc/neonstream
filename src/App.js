import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

import HomePage from './pages/home/Home';
import SeriesPage, { loadTv } from './pages/series/Series';
import History from './pages/history/History';
import WatchEpisodePage, { loadEpisode } from './pages/watch/WatchEpisode';
import WatchlistPage from './pages/watchlist/Watchlist';
import CustomListsPage from './pages/custom-lists/CustomLists';
import Authentification from './pages/auth/auth';
import { Provider } from 'react-redux';
import store from './store';
import MoviePage, { loadMovie } from './pages/movie/Movie';
import NotFound from './pages/error/NotFound';
import BrowseAll from './pages/browse/BrowseAll';
import BrowseMovies from './pages/browse/BrowseMovies';
import BrowseSeries from './pages/browse/BrowseSeries';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/tv/:id/watch/:season/:episode',
        element: <WatchEpisodePage />,
        loader: loadEpisode,
      },
      {
        path: '/tv/:id',
        element: <SeriesPage />,
        loader: loadTv,
      },
      { path: '/movie/:id', element: <MoviePage />, loader: loadMovie },
      {
        path: 'browse',
        children: [
          {
            index: true,
            element: <BrowseAll />,
          },
          { path: 'movies', element: <BrowseMovies /> },
          { path: 'tv', element: <BrowseSeries /> },
        ],
      },
      { path: 'watchlist', element: <WatchlistPage /> },
      { path: 'custom-lists', element: <CustomListsPage /> },
      { path: 'history', element: <History /> },
      { path: 'login', element: <Authentification /> },
      { path: 'register', element: <Authentification /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
