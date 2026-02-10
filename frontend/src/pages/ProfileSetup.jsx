//controls data flow
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm";
import FloatingHearts from "../components/FloatingHearts";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // your firebase config
import "../styles/Profile.css";

function ProfileSetup({ user }) {
  // Identity state (will come from Firestore later)
  const [profile, setProfile] = useState({
    displayName: "",
    bio: "",
    theme: "default",
    badges: []
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  //READ profile
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return; //prevents crashing

      const docRef = doc(db, "users", user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();
        setProfile({
          displayName: data.displayName || "",
          bio: data.bio || "",
          theme: data.theme || "default",
           badges: data.badges || []
        });
      }

      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  // WRITE profile
  const handleSave = async () => {
    setSaving(true);

    await setDoc(doc(db, "users", user.uid),{ ...profile, profileComplete: true
    },{ merge: true });

    setSaving(false);
  };

  return (
    <div className="profile-page">
      <Navbar user={user} displayName={profile.displayName} variant="profile" />

      <div className="profile-card">
        <h2 className="profile-title"> Your Profile</h2>

        {loading ? (
          <p>Loading profile...</p>
        ) : (
          <ProfileForm
            profile={profile}
            setProfile={setProfile}
            onSave={handleSave}
            saving={saving}
          />
        )}
      </div>
        <FloatingHearts />
    </div>
  );
}

export default ProfileSetup;
