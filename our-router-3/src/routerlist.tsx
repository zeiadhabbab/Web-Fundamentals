import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forget from "./pages/Forget";
import RouterLayout from "./RouterLayout";
import { isAuth } from "./auth";


function RequreAuth({children}: {children: React.ReactNode}){
    return (isAuth() ? <>{children}</>: <Navigate to="/login" replace />)
}


export const routerlist = createBrowserRouter([
    {
        path: "/",
        element: <RouterLayout />,
        children: [

            {path: 'home', element: <RequreAuth><Home /></RequreAuth>, index:true},


            {path: 'login', element: <Login />},
            {path: 'forget', element: <Forget />},
            
            {path: '*',  element: <Home />}
        ]
    }
])