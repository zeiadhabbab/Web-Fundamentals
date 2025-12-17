import { useState } from "react";
import type { FormEvent } from "react";

function Forget(){

    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder submit handler
        alert(`Reset link sent to ${email || 'your email'}`);
    }

    return (
      <div className="page">
        <div className="card">
          <h1 className="title">Reset your password</h1>
          <p className="subtitle">Enter your email and we will send you a reset link.</p>

          <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="reset-email">Email</label>
            <input
              id="reset-email"
              className="input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="btn primary" type="submit">Send reset link</button>
          </form>
        </div>
      </div>
    )
}

export default Forget;