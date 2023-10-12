import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fireBaseAuth from '../../firebase.init';
import { Navigate } from 'react-router';

const IfAuthExist = ({children}) => {
    const [user] = useAuthState(fireBaseAuth);
    if(user){
        return <Navigate to="/shop"></Navigate>
    }
    return children;
  
};

export default IfAuthExist;