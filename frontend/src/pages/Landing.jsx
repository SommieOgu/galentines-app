import { useEffect, useState } from 'react';
import { logout } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import './Landing.css';
import RainingHearts from '../components/RainingHearts';
import AuthModal from '../components/AuthModal';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Landing({ user }) { //Knows who the user is
   // Controls popup
   const [modalType, setModalType] = useState(null);

    // Used to redirect after successful signup
   const navigate = useNavigate();

   return (
    <div className="landing-page">
    <div className="nav-container">
            <nav className="navbar">
            <div className="nav-left"> Happy Valentine's Day Love's💕</div>
            <div className="nav-right">
              {user ? (<button onClick={logout}>Logout</button> ) : (
              <>
              <button  onClick={() => setModalType('login')}>Login</button>
              <button  onClick={() => setModalType('signup')}>Sign Up</button>
              </>
              )}
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
