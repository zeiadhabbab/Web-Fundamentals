import { useState } from "react";

function Forget(){
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle forget password logic here
        if(email != ''){
            // Typically would send a reset link to the email
            alert('Password reset link has been sent to your email!');
            setEmail('');
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">Reset Password</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                    Enter your email address and we'll send you a link to reset your password.
                </p>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        onChange={(e)=>setEmail(e.target.value)} 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        required 
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
                <button type="submit" className="login-button">Send Reset Link</button>
            </form>
        </div>
    )
}

export default Forget;