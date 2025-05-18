import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import Details from "../Pages/Details";
import EditCoffee from "../Pages/EditCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://cofee-store-server-bay.vercel.app/coffees"),
        hydrateFallbackElement: (
          <div className="text-center min-h-[calc(100vh-140px)] flex items-center justify-center">
            <span className="loading loading-dots  w-[70px]"></span>
          </div>
        ),
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        Component: Details,
        loader: ({ params }) =>
          fetch(
            `https://cofee-store-server-bay.vercel.app/coffee/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="text-center min-h-[calc(100vh-140px)] flex items-center justify-center">
            <span className="loading loading-dots  w-[70px]"></span>
          </div>
        ),
      },
      {
        path: "/coffee/edit/:id",
        Component: EditCoffee,
        loader: ({ params }) =>
          fetch(
            `https://cofee-store-server-bay.vercel.app/coffee/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="text-center min-h-[calc(100vh-140px)] flex items-center justify-center">
            <span className="loading loading-dots  w-[70px]"></span>
          </div>
        ),
      },
    ],
  },
]);

export default router;
