import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";

export const Login = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    await dispatch(login(data, navigate));
  };

  useEffect(() => {
    if (isLoggedIn || user) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, user]);

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login Now</button>
      </form>
      <button className="link-btn" onClick={handleRegister}>
        Don't have an account? Register here.
      </button>
      <div className="items-center flex flex-col">
        <h1>OR</h1>
      </div>
    </div>
  );
};
