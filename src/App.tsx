import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/mainLayout/MainLayout';
import Cards from './components/screens/cards/Cards';
import Payments from './components/screens/payments/Payments';
import Home from './components/screens/home/Home';
import Credit from './components/screens/credit/Credit';
import Settings from './components/screens/settings/Settings';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cards",
          element: <Cards />,
        },
        {
          path: "/payments",
          element: <Payments />,
        },
        {
          path: "/credit",
          element: <Credit />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        }
      ]
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
