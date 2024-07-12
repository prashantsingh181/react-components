import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: routes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
