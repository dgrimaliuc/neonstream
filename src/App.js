import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

import HomePage from './pages/home/Home';
import SeriesPage from './pages/series/Series';
import BrowsePage from './pages/browse/Browse';
import History from './pages/history/History';
import WatchPage from './pages/watch/Watch';
import WatchlistPage from './pages/watchlist/Watchlist';
import CustomListsPage from './pages/custom-lists/CustomLists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'series', element: <SeriesPage /> },
      { path: 'browse', element: <BrowsePage /> },
      { path: 'watch', element: <WatchPage /> },
      { path: 'watchlist', element: <WatchlistPage /> },
      { path: 'custom-lists', element: <CustomListsPage /> },
      { path: 'history', element: <History /> },
      {
        path: 'auth',
        children: [
          { index: true, element: <div>Login</div> },
          { path: 'register', element: <div>Register</div> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <RouterProvider router={router} />
    </>
  );
}
