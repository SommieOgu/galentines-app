import "./FloatingHearts.css";
import { memo } from "react";

function FloatingHearts() {
    const emojis = ["💖", "💗", "🎀"];

  return (
    <div className="floating-hearts">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: 8 + Math.random() * 10 + "s",
            fontSize: 18 + Math.random() * 18 + "px"
        }}
        >  {emojis[Math.floor(Math.random() * emojis.length)]}</span>
         ))}
    </div>
  );
}

export default memo(FloatingHearts);
