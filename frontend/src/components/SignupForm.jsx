import './AuthForms.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function SignupForm(){
  //stores what users enter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   // Stores confirm password input
  const [confirmPassword, setConfirmPassword] = useState("");
  // Used to redirect after successful signup
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before calling Firebase
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // 1. Create Auth user
      const userCredential = await signUp(email, password);
      const user = userCredential.user;

      // 2. Create Firestore profile doc
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        displayName: "",
        bio: "",
        theme: "default",
        badges: []
      });

      console.log("Account + profile created");

      // 3. Redirect to profile setup (not home)
      navigate("/profile-setup");

    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  

    return(
        <form className='auth-form' onSubmit={handleSubmit}>
         <h2>Be Mine? 💕</h2>

         <input 
            type= "Email"
            placeholder='Email'
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

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="auth-btn">
            Sign Up
          </button>

          <p className="auth-switch">
            Already have an account? Login 💕
          </p>
        </form>
  );
}

export default SignupForm;
         
