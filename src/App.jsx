import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import Genres from "./pages/Genres"
import Authors from "./pages/Authors"
import Publishers from "./pages/Publishers"


const router = createBrowserRouter([
  {
    element:  <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/genres",
        element: <Genres />
      },
      {
        path: "/authors",
        element: <Authors />
      },
      {
        path: "/publishers",
        element: <Publishers />
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
