import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./services";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./layout/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: routes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ], {
    basename: "/react-components"
  });

  return <RouterProvider router={router} />;
}

export default App;
