import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home";

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
                path:'/d',
                element:<div>Somewhere else...</div>
            },
        ]
    }
])



export default routes;