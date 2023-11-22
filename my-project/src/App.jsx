import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css"
import AppLayOut from "./UI/AppLayOut.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />
  },
])

function App() {

  return <RouterProvider router={router}  />
}

export default App
