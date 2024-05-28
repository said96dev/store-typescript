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
        { path: 'about', element: <About />, errorElement: <ErrorElement /> },
        { path: 'checkout', element: <Checkout />, errorElement: <ErrorElement /> },
        { path: 'orders', element: <Orders />, errorElement: <ErrorElement /> },
      ]
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,

    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
export default App 