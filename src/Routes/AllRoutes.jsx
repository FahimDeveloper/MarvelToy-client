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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/allToys', element: <AllToys /> },
            { path: '/sellerOwnToys', element: <PrivetRoute><MyToys /></PrivetRoute> },
            { path: "/addToy", element: <PrivetRoute><AddToy /></PrivetRoute> },
            { path: "/blog", element: <Blogs /> },
            { path: "/login", element: <AuthProtect><Login /></AuthProtect> },
            { path: "register", element: <AuthProtect><Register /></AuthProtect> }
        ]
    }
]);

export default router;