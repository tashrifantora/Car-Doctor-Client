import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch('https://car-doctor-server-six-sable.vercel.app/services')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/bookings",
                element: <PrivateRoutes>
                    <Bookings></Bookings>
                </PrivateRoutes>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes>
                    <CheckOut></CheckOut>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-doctor-server-six-sable.vercel.app/services/${params.id}`)
            },
        ]
    },
]);

export default router