import React from 'react';


const Popup = ({ isOpen, onClose, children ,id}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content pt-4">
        {children}
      </div>
      </div>
    
  );
};

export default Popup;