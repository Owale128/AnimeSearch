import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeApp from "./pages/AnimeApp";
import AnimeDetails from "./pages/AnimeDetails";
import NotFound from "./pages/NotFound";


export const router = createBrowserRouter([
{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <AnimeApp />
        },
        {
            path: '/animeDetails/:id',
            element: <AnimeDetails />
        },
    ],
    errorElement: <NotFound />
}
])