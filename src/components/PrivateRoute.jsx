import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (({children}) => {
    const { isAuthenticated } = useSelector((state) => state.user);

    if (!isAuthenticated){
        return <Navigate to="/login" />;
    }

    return children;
})

export default PrivateRoute;