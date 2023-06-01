import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/SharedComponents/Loader/Loader";

const PrivetRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />
    } else {
        return children;
    }

};

export default PrivetRoute;