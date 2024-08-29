import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeApp from "./pages/AnimeApp";


export const router = createBrowserRouter([
{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <AnimeApp />
        },
    ]
}
])