import { Form } from 'react-router-dom';
import './AuthForms.css';

function SignupForm(){
    return(
        <form className='auth-form'>
         <h2>Be Mine 💕</h2>

         <input 
            type= "Email"
            placeholder='Email'
            required
            />
         <input
        type="password"
        placeholder="Password"
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        required
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
         
