import { NavLink, useNavigate } from "react-router";
import { isAuth, logout } from "../auth";

function Header(){

    const navigate = useNavigate();

    return (
        <header className="header">
            <NavLink className='button' to="/">Home</NavLink>
            <NavLink className='button' to="/forget">Forget</NavLink>
            {!isAuth() && <NavLink className='button' to="/login">Login</NavLink>}
            
            {isAuth() &&<button className="button" onClick={()=>{
                logout();
                navigate("/login", {replace:true})

            }}>Logout</button>}

        </header>
    )
}

export default Header;