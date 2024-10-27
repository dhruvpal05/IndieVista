// src/components/SignUpForm.js
import { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import { signUpWithEmail, signInWithGoogle } from "../firebase/auth";
import "./SignUpFormStyles.css";
import { useAuth } from "../contexts/authContext";

function SignUpForm() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signUpWithEmail(email, password);
      console.log("User created:", userCredential.user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please try logging in.");
      } else {
        setError(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const user = await signInWithGoogle();
      console.log("User signed in with Google:", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container">
      {userLoggedIn && <Navigate to="/" replace={true} />}
      <h1>Already have an account?</h1>
      <button onClick={handleGoogleSignIn} className="google-signin">
        Sign In with Google
      </button>
      <h1>Enter your details below</h1>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign-Up!</button>
      </form>
    </div>
  );
}

export default SignUpForm;
