import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

import HomePage from './pages/home/Home';
import SeriesPage from './pages/series/Series';
import BrowsePage from './pages/browse/Browse';
import History from './pages/history/History';
import WatchPage from './pages/watch/Watch';
import WatchlistPage from './pages/watchlist/Watchlist';
import CustomListsPage from './pages/custom-lists/CustomLists';
import Authentification from './pages/auth/auth';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'series', element: <SeriesPage /> },
      {
        path: 'browse',
        children: [
          {
            index: true,
            element: <BrowsePage />,
          },
          { path: 'movies', element: <BrowsePage /> },
          { path: 'series', element: <BrowsePage /> },
        ],
      },
      { path: 'watch', element: <WatchPage /> },
      { path: 'watchlist', element: <WatchlistPage /> },
      { path: 'custom-lists', element: <CustomListsPage /> },
      { path: 'history', element: <History /> },
      { path: 'login', element: <Authentification /> },
      { path: 'register', element: <Authentification /> },
    ],
    errorElement: <div>Not Found</div>,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
