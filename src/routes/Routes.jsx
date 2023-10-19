import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
// import PrivateRoutes from "./PrivateRoutes";
// import Offers from "../pages/Offers/Offers";
// import Profile from "../pages/Profile/Profile";
// import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBrand from "../components/AddBrand";
import UpdateBrand from "../components/UpdateBrand";
import SingleBrand from "../components/SingleBrand";
// import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brand'),
                // loader: () => fetch('events.json'),
            },
            // {
            //     path: '/:id',
            //     element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
            //     loader: () => fetch(`events.json`),
                
            // },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: "addbrand",
                element: <AddBrand></AddBrand>,
            },
            {
                path: "updatebrand/:id",
                element: <UpdateBrand></UpdateBrand>,
                loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`)
            },
            {
                path: "brand/:name",
                element: <SingleBrand></SingleBrand>,
                loader: ({params}) => fetch(`http://localhost:5000/brand/${params.name}`),
            },
            // {
            //     path: '/offers',
            //     element: <PrivateRoutes><Offers></Offers></PrivateRoutes>,
            //     loader: () => fetch(`offers.json`),
                
            // },
            // {
            //     path: '/profile',
            //     element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            // },
            // {
            //     path: '/contact',
            //     element: <Contact></Contact>,
            // },
        ]
    }
]);

export default router;