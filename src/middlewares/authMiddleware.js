import Cookie from "js-Cookie"
import { Navigate, Outlet} from "react-router-dom"

const AuthMiddleware = () =>{
    const token = Cookie.get('token');

    if(token){
        return <Outlet/>
    }

    return <Navigate to="/" replace/>
}

export default AuthMiddleware;