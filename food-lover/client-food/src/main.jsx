import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import AddFoodItem from "./pages/AddFoodItem.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import UpdateFood from "./components/UpdateFood.jsx";
import SingleFood from "./pages/SingleFood.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-food",
        element: <AddFoodItem></AddFoodItem>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/update-food/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) => 
          fetch(`http://localhost:6002/foods/${params.id}`),
        
      },
      {
        path: "/buy-food/:id",
        element: <SingleFood></SingleFood>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
