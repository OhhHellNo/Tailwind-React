import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "../Pages/First";

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <First />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
