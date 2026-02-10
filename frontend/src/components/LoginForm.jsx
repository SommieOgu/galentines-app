//contains the content
import './AuthForms.css';
import { useState } from "react";
import { login } from "../firebase/auth"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function LoginForm() {
  // Store email input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //  stop page refresh
    setLoading(true);

    try {
      // 1️⃣ Log in user
      const userCredential = await login(email, password);
      const user = userCredential.user;

      // 2️⃣ Check Firestore profile
      const snap = await getDoc(doc(db, "users", user.uid));

      if (snap.exists() && snap.data().profileComplete) {
        navigate("/home");
      } else {
        navigate("/profile-setup");
      }

    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
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