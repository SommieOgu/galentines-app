import { useEffect, useState } from 'react';
import { logout } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import './Landing.css';
import RainingHearts from '../components/RainingHearts';
import AuthModal from '../components/AuthModal';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Navbar from '../components/NavBar';

function Landing({ user }) { //Knows who the user is
   // Controls popup
   const [modalType, setModalType] = useState(null);

    // Used to redirect after successful signup
   const navigate = useNavigate();

   const handleLogout = async () => {
      await logout();
      navigate("/"); // optional, keeps you on landing
    };

   return (
    <div className="landing-page">
    <div className="nav-container">
            <Navbar
              user={user}
              login={() => setModalType('login')}
              signup={() => setModalType('signup')}
              Logout={handleLogout}
            />
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
