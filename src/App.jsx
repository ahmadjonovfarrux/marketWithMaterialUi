import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { loader as HomeLoader } from "./pages/Home";
import { loader as ProductLoader } from "./pages/ProductInfo";
import ProductInfo from "./pages/ProductInfo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: `/product/:id`,
          element: <ProductInfo />,
          loader: ProductLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
