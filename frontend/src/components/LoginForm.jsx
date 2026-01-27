//contains the content
import './AuthForms.css';

function LoginForm() {
  return (
    <form className="auth-form">
      <h2>Welcome Back 💕</h2>

      <input
        type="email"
        placeholder="Email"
        required
      />

      <input
        type="password"
        placeholder="Password"
        required
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