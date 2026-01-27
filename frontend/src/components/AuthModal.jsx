//box containment 

import './AuthModal.css';

function AuthModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
 // doesn't render anything until isOpen is true
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        {children} 
      </div>
    </div>
  );
}

export default AuthModal;