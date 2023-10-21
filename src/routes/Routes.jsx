import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBrand from "../components/AddBrand";
import UpdateBrand from "../components/UpdateBrand";
import SingleBrand from "../components/SingleBrand";
import AddProduct from "../pages/Product/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetail from "../pages/Product/ProductDetail";
import UpdateProduct from "../pages/Product/UpdateProduct";

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
            },
            {
                path: '/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/brand'),
            },
            {
                path: "product/:id",
                element: <PrivateRoutes><ProductDetail></ProductDetail></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
            },
            {
                path: "updateproduct/:id",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/cart'),
            },
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
                path: "brand/:id",
                element: <SingleBrand></SingleBrand>,
                loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`),
            },
        ]
    }
]);

export default router;