import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import Genres from "./pages/Genres"
import Authors from "./pages/Authors"
import Publishers from "./pages/Publishers"
import GenreWiseBooks from "./pages/GenreWiseBooks"
import Signup from "./pages/Signup"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />
  },
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
        path: "/genres/:genreId",
        element: <GenreWiseBooks />
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
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  )
}

export default App
