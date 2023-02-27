import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Cosmetics } from "./pages/Cosmetics/Cosmetics";
import { Home } from "./pages/Home/Home";
import { Main } from "./pages/Main/Main";
import { Parfume } from "./pages/Parfume/Parfume";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/parfume",
                element: <Parfume />
            },
            {
                path: "/cosmetics",
                element: <Cosmetics />
            }
        ]
    },
    {
        path: "login",
        element: <Auth />
    }
])