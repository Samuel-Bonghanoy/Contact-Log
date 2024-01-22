import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Create from "./components/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/contact/:id",
    element: <Details />,
  },
  {
    path: "/contact/:id/edit",
    element: <Edit />,
  },
  {
    path: "/contact/create",
    element: <Create />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
