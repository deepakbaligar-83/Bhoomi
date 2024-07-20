import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../Assets/cowfarmer.png";
import "./Login.css";
import PulseLoader from "react-spinners/PulseLoader";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Dashboard from "./Dashboard";
import ICON from "../Assets/google-icon.png";
import { loginUser } from "../backendservice";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  function emailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = email.split('@')[1];
    return emailRegex.test(email) && domain.toLowerCase() === 'gmail.com';
  }

  function passwordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8,}$/;
    return regex.test(password);
  }

  const handleLogin = async () => {
    const isEmailValid = emailValid(email);
    const isPasswordValid = passwordValid(password);

    setEmailError(isEmailValid ? "" : "Enter a valid Gmail address");
    setPasswordError(isPasswordValid ? "" : "Password must contain at least one uppercase letter, one number, one lowercase letter, one special character, and be at least 8 characters long");

    if (isEmailValid && isPasswordValid) {
      const userData = {
        email: email,
        password: password
      };

      try {
        const flag = await loginUser(userData);
        if (!flag) {
          setPasswordError("Invalid email or password");
        } else {
          localStorage.setItem("email", email);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/dashboard");
    });
  };

  return (
    <div className="login-container">
      {loading ? (
        <PulseLoader color={'#1b591c'} loading={loading} size={20} />
      ) : value ? (
        <Dashboard />
      ) : (
        <div className="login-content">
          <div className="login-image">
            <img src={Logo} alt="Login_Image" className="login-logo" />
          </div>
          <div className="login-form">
            <h1 className="login-title"><b>Login</b></h1>
            <p className="welcome">Welcome Back,</p>
            <div className="login-inputs">
              <input
                type="email"
                className="login-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="login-error">{emailError}</div>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="show-password-label">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={toggleShowPassword}
                  />
                  Show Password
                </label>
              </div>
              <div className="login-error">{passwordError}</div>
            </div>
            <div className="login-button">
              <button
                type="button"
                className="login-btn"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="signup-message">
                <p>Don't have an account? <a href="/signup" className="signup">Sign Up</a></p>
                <p className="hr-lines">or</p>
                <div className="google">
                  <img src={ICON} alt="Google" className="google-icon" />
                  <button className="google-btn" onClick={handleGoogleSignIn}>Sign in with Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
