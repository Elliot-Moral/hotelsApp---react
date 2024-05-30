import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    if(localStorage.getItem('token')){
        return <Outlet />
    }else{
        return <Navigate to="/login"/>
    }

    //borrar el token en caso de que el token haya expirado.
  
}

export default ProtectedRoutes