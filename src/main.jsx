import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import App from "./App.jsx";
import PanduanPengguna from "./pages/PanduanPengguna.jsx";
import ErrorPage from "./pages/404.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import HargaNilam from "./pages/HargaNilam.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import Chatpage from "./pages/Chatpage.jsx";
import Register from "./pages/Register.jsx";
import AkaliLogin from "./pages/AkaliLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Panduan",
    element: <PanduanPengguna />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/News",
    element: <NewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Harga",
    element: <HargaNilam />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Welcome",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Chat",
    element: <Chatpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Regis",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Nama",
    element: <AkaliLogin />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
