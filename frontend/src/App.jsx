import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { signUp, login, logout } from "./firebase/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
//import Home from './pages/Home';
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
        setUser(currentUser);
    
       console.log("No user logged in");
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
     <Router>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
