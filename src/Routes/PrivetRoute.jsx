import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import { Navigate } from "react-router-dom";
import Loader from "../Pages/SharedComponents/Loader/Loader";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader />
    }
    if (!user) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children
    }

};

export default PrivetRoute;