import * as React from 'react'
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    element: React.ReactNode;
}

const PrivateRoute: React.FC <PrivateRouteProps> = ({element}) => {

    const isLoggedIn: boolean = useIsLoggedIn();

    if(isLoggedIn){
        return element;
    }
    return <Navigate to= "/login"/>
};

export default PrivateRoute;