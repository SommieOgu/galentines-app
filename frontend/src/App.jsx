import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Landing from './pages/Landing';
import ProfileSetup from "./pages/ProfileSetup";
import Home from './pages/Home'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'

function App() {
  /* Holds the currently logged-in Firebase user
  null = not logged in */
  const [user, setUser] = useState(null);
  


  //Used to prevent UI changes during state checks
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Firebase Listener once page load, login and logout
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
        console.log("User is logged in:");
        setUser(currentUser || null);
    
       // console.log("No user logged in");
       setLoading(false);
    });

    return () => unsubscribe();
  }, []);

 // Prevent rendering until Firebase finishes auth check
  if (loading) {
    return <p>Loading...</p>;
  }

  console.log("Firebase auth instance:", auth);
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile-setup" element={ user ? <ProfileSetup user={user} /> : (
            <Navigate to="/" replace />
          )}/>
        <Route path="/home" element={  user ? <Home user={user} /> : (
            <Navigate to="/" replace />
          )}/>
      </Routes>
    </>
  );
}

export default App
