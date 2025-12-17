import { createBrowserRouter, Navigate } from "react-router-dom";
import RouterLayout from "./RouterLayout";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import Home from "./pages/Home";
import { isAuth } from "./auth";


function RequireAuth({children} : {children: React.ReactNode}){

     return (isAuth() ? <>{children}</>: <Navigate to="/login" replace />)
}

export const router = createBrowserRouter(
[{
    path: "/",
    element:<RouterLayout/>,
    children: [
        {index: true, element: 
            <RequireAuth>
                <Home />
            </RequireAuth>
        },
        {path: 'login', element: <Login />},
        {path: 'forget', element: <Forget />},
        {path: '*', element: <Navigate to="/" replace />},
    ]     
}])