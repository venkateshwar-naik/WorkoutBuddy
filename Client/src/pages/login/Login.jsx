import React, { useState } from "react";
import "./Login.scss";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {login,error}=useLogin()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(email,password)
   await login(email,password);
   setEmail("")
   setPassword("")


  }
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="feild">
          <label htmlFor="">Email</label>
          <input
            type="mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="feild">
          <label htmlFor="">Password</label>
          <input type="password" name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
        </div>

        <button>submit</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
