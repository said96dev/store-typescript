import { ErrorElement } from './components'
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages/index'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { loader as landingLoader } from "./pages/Landing"
import { loader as productsLoader } from "./pages/Products"
import { loader as SingleProductsLoader } from "./pages/SingleProduct"
import { loader as checkoutLoader } from "./pages/Checkout"
import { loader as ordersLoader } from "./pages/Orders"


import { action as loginAction } from './pages/Login';
import { store } from './store/store';

import { action as RegisterAction } from "./pages/Register"
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          loader: landingLoader, index: true, element: <Landing />, errorElement: <ErrorElement />
        },
        {
          loader: productsLoader,
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement />,

        },
        { loader: SingleProductsLoader, path: 'products/:id', element: <SingleProduct />, errorElement: <ErrorElement /> },

        { path: 'cart', element: <Cart />, errorElement: <ErrorElement /> },
        {
          path: 'about', element: <About />, errorElement: <ErrorElement />
        },
        {
          loader: checkoutLoader(store), path: 'checkout', element: <Checkout />, errorElement: <ErrorElement />
        },
        {
          path: 'orders',
          element: <Orders />,
          errorElement: <ErrorElement />,
          loader: ordersLoader(store),
        },]
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action: RegisterAction,
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
export default App 