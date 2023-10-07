import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    let {user} = useContext(AuthContext)
    let navigate = useNavigate()

    if(!user){return navigate('/login')}
    
    return children;
};

export default PrivateRoute;