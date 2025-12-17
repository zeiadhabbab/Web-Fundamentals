import { useState } from "react";
import { isAuth, login } from "../auth";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username);
        if (username != '' && password != '') {
            login();
            // redirect user log jome page
            navigate("/home", { replace: true })

        }
    }

    return (

        <>
            {isAuth() ? <Navigate to="/home" replace /> :
                <div className="page auth-page">
                    <div className="card">
                        <h1 className="title">Welcome back</h1>
                        <p className="subtitle">Sign in to continue</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="label" htmlFor="email">Email</label>
                            <input className="input" onChange={(e) => { setUsername(e.target.value.trim()) }} type="email" id="email" name="email" required />

                            <label className="label" htmlFor="password">Password</label>
                            <input className="input" onChange={(e) => { setPassword(e.target.value.trim()) }} type="password" id="password" name="password" required />

                            <button className="btn primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>

            }
        </>
    )
}

export default Login;