import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductList } from "./pages/Product";
import { ContactPage } from "./pages/ContactPage";
import { Layouts } from "./components/Layout";
import LoginPage from "./pages/LoginForm";
import { SignUpForm } from "./pages/SignUpForm";
import { ProtectedRoutes } from "./components/ProtectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Layouts />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
      {
        path: "analytics",
        element: <ContactPage />,
      },
    ],
  },
]);
