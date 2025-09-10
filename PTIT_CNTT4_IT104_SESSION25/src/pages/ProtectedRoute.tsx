import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const isLogin = false;
    if(!isLogin){
        return <Navigate to="/login"></Navigate>
    }
}
