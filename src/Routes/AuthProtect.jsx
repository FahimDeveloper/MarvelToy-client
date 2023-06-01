import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';
import { useLocation, Navigate } from 'react-router-dom';
import Loader from '../Pages/SharedComponents/Loader/Loader';

const AuthProtect = ({ children }) => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader />
    }
    if (user) {
        return <Navigate to={from} replace={true} />;
    } else {
        return children
    }
};
export default AuthProtect;