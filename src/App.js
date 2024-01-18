import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

import HomePage from './pages/home/Home';
import Series from './pages/series/Series';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'series', element: <Series /> },
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
