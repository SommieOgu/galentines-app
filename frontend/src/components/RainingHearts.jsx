import { useEffect } from "react";
import "./RainingHearts.css";

function RainingHearts() {
  useEffect(() => {
    const container = document.querySelector(".hearts");

    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💖";

      // Random position & size
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      heart.style.animationDelay = Math.random() * 1 + "s";

      container.appendChild(heart);

      // Remove after animation
      setTimeout(() => heart.remove(), 6000);
    }
  }, []);

  return <div className="hearts"></div>;
}

export default RainingHearts;
