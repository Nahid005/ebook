import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import BooksDetails from "./pages/BooksDetails"
import Checkout from "./pages/Checkout"
import Genres from "./pages/Genres"
import Authors from "./pages/Authors"
import Publishers from "./pages/Publishers"
import GenreWiseBooks from "./pages/GenreWiseBooks"
import Signup from "./pages/Signup"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Signin from "./pages/Singin"
import AuthorDetails from "./pages/AuthorDetails"
import Books from "./pages/Books"
import TermsAndCondition from "./pages/TermsAndCondition"
import Privacy from "./pages/Privacy"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    element:  <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/books",
        element: <Books />
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
        path: "/authors/:authorId",
        element: <AuthorDetails />
      },
      {
        path: "/publishers",
        element: <Publishers />
      },
      {
        path: "/product/:bookId",
        element: <BooksDetails />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/terms",
        element: <TermsAndCondition />
      },
      {
        path: "/privacy",
        element: <Privacy />
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
