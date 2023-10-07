import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home";
import PrivateRoute from "../../Auth/PrivateRoute";
import Details from "../Details";
import axios from "axios";
import Login from "../LogInOut/Login";
import Register from "../LogInOut/Register";
import Error from "../ErrorPage.jsx/Error";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])



export default routes;