import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home";
import PrivateRoute from "../../Auth/PrivateRoute";
import Details from "../Details";
import axios from "axios";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>This is error Page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: (params) =>  axios.get('/cards.json')
            },
            {
                path: '/3',
                element: <PrivateRoute><div>Private 3RD Page</div></PrivateRoute>
            },
        ]
    }
])



export default routes;