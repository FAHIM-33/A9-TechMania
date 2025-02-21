import { Outlet } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <ToastContainer
                theme="dark"
                closeOnClick
                newestOnTop={false}
                autoClose={3000}
                position="top-center"
            />
        </div>
    );
};

export default MainLayout;