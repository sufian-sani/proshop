import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import {useState} from "react";

const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;