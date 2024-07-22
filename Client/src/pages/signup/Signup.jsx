import React, { useState } from "react";
import "./Signup.scss";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);

    setEmail("")
    setPassword("")
    // console.log(email,password)
  };
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="feild">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="feild">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>submit</button>

        {error && <p> {error} </p>}
      </form>
    </div>
  );
};

export default Signup;
