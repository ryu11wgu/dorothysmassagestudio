import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
