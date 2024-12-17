import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupLogin.css"; // Import the CSS file

function SignupLogin() {
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup and login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation after successful login/signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password match validation for Signup
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const url = isSignup
      ? "http://localhost:5000/register"
      : "http://localhost:5000/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setError(""); // Clear any existing errors
        // Redirect to a home page or dashboard after successful login/signup
        navigate("/home");
        console.log(data.message); // For testing purposes
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1>{isSignup ? "Signup" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isSignup && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>

      <p className="toggle-link">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className="link-button"
            >
              Login
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className="link-button"
            >
              Sign Up
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default SignupLogin;
