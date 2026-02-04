import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "../Pages/First";
import Second from "../Pages/Second";

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <First />,
    },
    {
      path: "/second",
      element: <Second />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
