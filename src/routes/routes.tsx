import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import DiscoverBooks from '../pages/DiscoverBooks';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <DiscoverBooks />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      // {
      //   path: '/checkout',
      //   element: (
      //     <PrivateRoute>
      //       <Checkout />,
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
//   {
//     path: '*',
//     element: <NotFound />,
//   },
]);

export default routes;
