import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../Assets/cow2.jpg";
import "./Signup.css";
import PulseLoader from "react-spinners/PulseLoader";
import { addUser } from "../backendservice";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [stateError, setStateError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const capitalRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    let errors = [];

    if (password.trim() === "") {
      errors.push("Password cannot be empty");
    } else {
      if (password.length < minLength) {
        errors.push("Password must be at least 8 characters long");
      }
      if (!capitalRegex.test(password)) {
        errors.push("Password must contain at least one capital letter");
      }
      if (!lowercaseRegex.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
      }
      if (!numberRegex.test(password)) {
        errors.push("Password must contain at least one number");
      }
      if (!specialCharRegex.test(password)) {
        errors.push("Password must contain at least one special character");
      }
    }

    return errors.join(", ");
  };

  const handleSignup = () => {
    const isFirstNameValid = firstName.trim() !== "";
    const isLastNameValid = lastName.trim() !== "";
    const isEmailValid = validateEmail(email);
    const passwordErrors = validatePassword(password);
    const isPasswordValid = passwordErrors === "";
    const isConfirmPasswordValid = password === confirmPassword;
    const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);
    const isStateValid = state !== "";

    setFirstNameError(isFirstNameValid ? "" : "First Name is required");
    setLastNameError(isLastNameValid ? "" : "Last Name is required");
    setEmailError(isEmailValid ? "" : "Enter a valid Email");
    setPasswordError(passwordErrors);
    setConfirmPasswordError(isConfirmPasswordValid ? "" : "Passwords do not match");
    setPhoneNumberError(isPhoneNumberValid ? "" : "Enter a valid 10-digit phone number");
    setStateError(isStateValid ? "" : "Please select a state");

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isPhoneNumberValid &&
      isStateValid
    ) {
      setRegistrationSuccess(true);
      setTimeout(() => {
        const userData = {
          userFirstName: firstName.trim(),
          userLastName: lastName.trim(),
          userEmail: email.toLowerCase(),
          userPassword: password,
          userPhone: phoneNumber,
          userState: state,
        };
        addUser(userData)
        navigate("/login");
      }, 3000);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (input.length <= 10 && /^\d*$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="signup-container">
      {loading ? (
        <PulseLoader color={"#1b591c"} loading={loading} size={20} />
      ) : (
        <div className="signup-content">
          <div className="signup-image">
            <img src={Logo} alt="signup_Image" className="signup-logo" />
          </div>
          <div className="signup-form">
            <h1 className="signup-title">
              <b className="title">Sign Up</b>
            </h1>
            {registrationSuccess && (
              <div className="registration-success">
                Successfully Registered! Redirecting to Login page ...
              </div>
            )}
            <div className="signup-inputs">
              <input
                type="text"
                className="signup-input"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="signup-error">{firstNameError}</div>

              <input
                type="text"
                className="signup-input"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="signup-error">{lastNameError}</div>

              <input
                type="email"
                className="signup-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="signup-error">{emailError}</div>

              <div className="phone-input-container">
                <div className="country-code-select">
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="country-code-dropdown"
                  >
                    <option value="+91">+91</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="signup-input1"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div className="signup-error">{phoneNumberError}</div>

              <select
                className="signup-input"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Delhi">Delhi</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              </select>
              <div className="signup-error">{stateError}</div>

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="signup-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signup-error">{passwordError}</div>

              <input
                type={showPassword ? "text" : "password"}
                className="signup-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="signup-error">{confirmPasswordError}</div>

              {/* <div className="show-password-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={toggleShowPassword}
                  />
                  Show Password
                </label>
              </div> */}

            <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            <label className="showpass" htmlFor="showPassword">Show Password</label>
          </div>

              <button className="signup-btn" onClick={handleSignup}>
                Sign Up
              </button>
              <div className="signup-message">
            <p>
              Already have an account? Click here to <a href="/login" className="login">Login</a>
            </p>
          </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
