import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SearchPage from "./app/search-page";
import InformationPage from './app/information-page'
import ErrorPage from "./app/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/information",
    element: <InformationPage />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
