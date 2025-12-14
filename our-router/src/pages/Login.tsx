import { useState } from "react";
import { login } from "../auth";
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        if(username != '' && password != ''){
            login();
            navigate("/", {replace: true})
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        onChange={(e)=>setUsername(e.target.value)} 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        className="form-input"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}

export default Login;