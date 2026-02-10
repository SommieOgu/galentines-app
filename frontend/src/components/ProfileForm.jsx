//Displays and manages input fields
import "./ProfileForm.css";
function ProfileForm({ profile, setProfile, onSave, saving }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const badgeOptions = [
    "💻 Coder",
    "🎨 Creative", 
    "💖 Sweetheart",
    "🌙 Night Owl", 
    "🌸 Soft Soul",
    "✝️ Child of God",
    "❤️ Lover",
    "💅 Baddie",
    "🐸 Mischief"
  ];

  const toggleBadge = (badge) => {
  setProfile((prev) => {
    const hasBadge = prev.badges?.includes(badge);

    if (hasBadge){
      return {
      ...prev,
      badges:  prev.badges.filter((b) => b !== badge)
      };
    }

    if (prev.badges.length >= 3){
      return prev;
    }

    return {
      ...prev,
      badges: [...prev.badges, badge]
    };
  });
};

  return (
    <div className="profile-form">
      <label>Display Name</label>
      <input
        type="text"
        name="displayName"
        value={profile.displayName}
        onChange={handleChange}
        placeholder="Whats your name..?"
      />

      <label>Bio</label>
      <textarea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Tell us something sweet..."
      />

      <label>Pick your vibe ✨</label>
      <div className="badge-grid">
        {badgeOptions.map((badge) => (
          <button
            key={badge}
            type="button"
            className={`badge-chip ${
              profile.badges?.includes(badge) ? "active" : ""}
              ${profile.badges.length >= 2 && !profile.badges.includes(badge)
                ? "disabled"
                : ""
            }`}
            onClick={() => toggleBadge(badge)}
          >
            {badge}
          </button>
        ))}
      </div>

      <button onClick={onSave} disabled={saving}>
        {saving ? "Saving..." : "Save Changes 💌"}
      </button>
    </div>
  );
}

export default ProfileForm;

//Theme selector bubbles
//📸 Profile picture upload
//💌 Animated “Save complete!” confetti hearts