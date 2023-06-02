import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import PrivetRoute from "./PrivetRoute";
import AuthProtect from "./AuthProtect";
import ViewToyDetails from "../Pages/ViewToyDetails/ViewToyDetails";
import Error from "../Pages/SharedComponents/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/allToys', element: <AllToys /> },
            { path: '/sellerOwnToys', element: <PrivetRoute><MyToys /></PrivetRoute> },
            { path: "/addToy", element: <PrivetRoute><AddToy /></PrivetRoute> },
            {
                path: "/toys/view/:id", element: <PrivetRoute><ViewToyDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-psi-ten.vercel.app/toys/${params.id}`)
            },
            { path: "/blog", element: <Blogs /> },
            { path: "/login", element: <AuthProtect><Login /></AuthProtect> },
            { path: "register", element: <AuthProtect><Register /></AuthProtect> }
        ]
    }
]);

export default router;