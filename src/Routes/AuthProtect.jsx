import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth';
import { Navigate } from 'react-router-dom';

const AuthProtect = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return <Navigate to="/" replace={true} />
    } return children
};

export default AuthProtect;