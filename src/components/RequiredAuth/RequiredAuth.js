import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fireBaseAuth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router';

const RequiredAuth = ({children}) => {
    const [user] = useAuthState(fireBaseAuth);
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;