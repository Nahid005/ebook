import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"
import { lazy, Suspense } from "react"
import 'leaflet/dist/leaflet.css';
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentFail from "./pages/PaymentFail"
import PaymentCancel from "./pages/PaymentCancel"


const AppLayout = lazy(() => import("./components/AppLayout")) 
const Home = lazy(() => import("./pages/Home")) 
const BooksDetails = lazy(() => import("./pages/BooksDetails")) 
const Checkout = lazy(() => import("./pages/Checkout")) 
const Genres = lazy(() => import("./pages/Genres")) 
const Authors = lazy(() => import("./pages/Authors")) 
const Publishers = lazy(() => import("./pages/Publishers")) 
const GenreWiseBooks = lazy(() => import("./pages/GenreWiseBooks")) 
const Signup = lazy(() => import("./pages/Signup")) 
const Signin = lazy(() => import("./pages/Singin")) 
const AuthorDetails = lazy(() => import("./pages/AuthorDetails")) 
const Books = lazy(() => import("./pages/Books")) 
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition")) 
const Privacy = lazy(() => import("./pages/Privacy")) 
const PublisherDetails = lazy(() => import("./pages/PublisherDetails")) 
const Verifyotp = lazy(() => import("./pages/Verifyotp")) 
const RefundPolicy = lazy(() => import("./pages/RefundPolicy")) 
const Notfound = lazy(() => import("./pages/Notfound")) 
const Loading = lazy(() => import("./components/Loading")) 
const DeleteAccountInstruction = lazy(() => import("./pages/DeleteAccountInstruction"))
const Aboutus = lazy(() => import("./pages/Aboutus"))
const Contactus = lazy(() => import("./pages/Contactus"))
const FavouriteBook = lazy(() => import("./pages/FavouriteBook"))
const PrivateRoute = lazy(() => import("./components/PrivateRoute"))
const Profile = lazy(() => import("./pages/Profile"))
const ProfileLayout = lazy(() => import("./components/ProfileLayout"))
const ChangePassword = lazy(() => import("./pages/ChangePassword"))
const Setting = lazy(() => import("./pages/Setting"))


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60
    }
  }
});

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
    path: '/verifyotp',
    element: <Verifyotp />
  },
  {
    path: "*",
    element: <Notfound />
  },
  {
    element:  <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        element: <ProfileLayout />,
        children: [
          {
            path: '/profile',
            element: <Profile />
          },
          {
            path: '/changepassword',
            element: <ChangePassword />
          },
          {
            path: '/setting',
            element: <Setting />
          },
          {
            path: '/signout',
            element: <h1>Sign out</h1>
          }
        ]
      },
      {
        path: "/books",
        element: <Books />
      },
      {
        path: "/favouritebooks",
        element: <PrivateRoute>
          <FavouriteBook />
        </PrivateRoute>
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
        path: "/publisherdetails/:publisherId",
        element: <PublisherDetails />
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
        path: "/aboutus",
        element: <Aboutus />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/terms",
        element: <TermsAndCondition />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/refundpolicy",
        element: <RefundPolicy />
      },
      {
        path: "/deleteaccountinstruction",
        element: <DeleteAccountInstruction />
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />
      },
      {
        path: "/payment-fail",
        element: <PaymentFail />
      },
      {
        path: "/payment-cancel",
        element: <PaymentCancel />
      }
    ]
  }
])

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
