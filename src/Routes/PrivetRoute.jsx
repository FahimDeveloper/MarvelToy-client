import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <Navigate to="/login" replace={true} />
    }
    return children
};

export default PrivetRoute;