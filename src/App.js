import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loadEpisode, loadTv, loadMovie } from './pages';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

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
  Search,
  History,
  Series,
  Movie,
  Home,
} from './pages';
import React from 'react';

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
      { path: 'search', element: <Search /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
}
