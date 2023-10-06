import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home";
import PrivateRoute from "../../Auth/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<div>This is error Page</div>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/2',
                element:<PrivateRoute><div>PRIVATE SECOND Page</div></PrivateRoute> 
            },
            {
                path:'/3',
                element:<PrivateRoute><div>Private 3RD Page</div></PrivateRoute>
            },
        ]
    }
])



export default routes;