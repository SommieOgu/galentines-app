//contains the content
import './AuthForms.css';
import { useState } from "react";
import { login } from "../firebase/auth"; // adjust path if needed
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // Store email input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //  stop page refresh

    try {
      await login(email, password); // Firebase login
      console.log("Login successful");
      navigate("/home"); // redirect after login
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }

    console.log("FORM SUBMITTED", email, password);

  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit} >
      <h2>Welcome Back 💕</h2>

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="auth-btn">
        Login
      </button>

      <p className="auth-switch">
        Don't have an account? Sign up 💖
      </p>
    </form>
  );
}

export default LoginForm;