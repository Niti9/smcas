import React from 'react';
import "./Pop.css";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close1" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
      </div>
    
  );
};

export default Popup;