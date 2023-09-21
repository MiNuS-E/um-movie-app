import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MovieLayout = () => {
    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default MovieLayout;