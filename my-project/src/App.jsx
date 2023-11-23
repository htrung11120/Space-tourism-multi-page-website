import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import "./index.css"
import AppLayOut from "./UI/AppLayOut.jsx"
import Destination from "./Destination/Destination.jsx"
import Body from "./UI/Body.jsx"
import TextBody from "./Destination/TextBody.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />
  },
  {
    path: '/home',
    element: <Body />

  },
  {
    path: '/destination',
    element: <Destination />,
    children: [{
      path: ':name',
      element: <TextBody />
    }, {
      path: '/destination/',
      element: <Navigate to="/destination/moon" />,

    }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
