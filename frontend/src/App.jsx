import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { signUp, login, logout } from "./firebase/auth";
import './App.css'

function App() {
  /* Holds the currently logged-in Firebase user
  null = not logged in */
  const [user, setUser] = useState(null);

  //Used to prevent UI changes during state checks
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Firebase Listener once page load, login and logout
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        setUser(user);
      } else {
        console.log("No user logged in");
        setUser(null);
      }

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
      <div>
         {user ? (
      <>
        <p>Logged in as {user.email}</p>
        <button onClick={logout}>Logout</button>
      </>
    ) : (
      <>
        <p>Not logged in</p>
        <button onClick={() => signUp("test@email.com", "password123")}>
          Sign Up
        </button>
        <button
          onClick={() => login("test@email.com", "password123")}
        >
          Login
        </button>
      </>
    )} 
      </div>
       <div>
      {user ? (
        <p>Logged in as {user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
    </>
  );
}

export default App
