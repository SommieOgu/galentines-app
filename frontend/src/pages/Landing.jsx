import { useState } from 'react';
import './Landing.css';
import RainingHearts from '../components/RainingHearts';
import AuthModal from '../components/AuthModal';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Landing() {
   // Controls popup
  const [modalType, setModalType] = useState(null);
  return (
    <div className="landing-page">
    <div className="nav-container">
            <nav className="navbar">
            <div className="nav-left"> Happy Valentine's Day Love's💕</div>
            <div className="nav-right">
                <button className="nav-btn" onClick={() => setModalType('login')}>Login</button>
                <button className="nav-btn outline" onClick={() => setModalType('signup')}>Sign Up</button>
            </div>
            </nav>
            </div>
            <div className="hero-section">
            <div className="bg-layer"></div>     {/* BACKGROUND */}
            <RainingHearts />
        </div>

       {/* MODAL RENDER */}
      <AuthModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
      >
        {modalType === 'login' ? <LoginForm /> : <SignupForm />}
      </AuthModal>
 
    </div>
  );
}

export default Landing;
