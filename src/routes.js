import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login",
        element: <Auth />
    }
])