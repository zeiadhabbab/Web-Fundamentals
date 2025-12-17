import { NavLink, useNavigate } from "react-router-dom";
import { isAuth, logout } from "../auth";

function Header(){

    const navigate = useNavigate();
    

    return (
        <header className="header">
            <NavLink className='btn' to="/home">Home</NavLink>
            {!isAuth() &&  <NavLink className='btn' to="/login">Login</NavLink>}
            <NavLink className='btn' to="/forget">Forget</NavLink>

            {isAuth() &&<button className='btn' onClick={()=>{
                logout();
                navigate('login', {replace: true})
            }}>Logout</button>}
        </header>
    )
}

export default Header;