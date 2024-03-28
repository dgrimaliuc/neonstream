import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loadEpisode, loadTv, loadMovie } from './pages';

import { Provider } from 'react-redux';
import store from './store';

import {
  Authentification,
  BrowseSeries,
  WatchEpisode,
  BrowseMovies,
  CustomLists,
  RootLayout,
  BrowseAll,
  Watchlist,
  NotFound,
  History,
  Series,
  Movie,
  Home,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/tv/:id/watch/:season/:episode',
        element: <WatchEpisode />,
        loader: loadEpisode,
      },
      {
        path: '/tv/:id',
        element: <Series />,
        loader: loadTv,
      },
      { path: '/movie/:id', element: <Movie />, loader: loadMovie },
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
      { path: 'watchlist', element: <Watchlist /> },
      { path: 'custom-lists', element: <CustomLists /> },
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
