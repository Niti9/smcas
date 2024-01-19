import React from "react";
import Link from 'next/link';

const Popup = ({ isOpen, onClose, children, id, handleClosePopup }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup  ">
     
      {/* large screen */}
      <div
        className=" hidden lg:block  pt-4 
      bg-[#fff]
      pb-[10px]
       w-[957px]
       h-[650px]
       rounded-lg
      text-center
  "
      >
        {children}
      </div>

      {/* small screen */}
      <div
        className="  lg:hidden  pt-4 
      bg-[#fff]
      pb-[10px]
      min-w-300 min-h-100
      w-full h-auto
       rounded-lg
      text-center "
      >
      {children}
        </div>

    </div>
  );
};

export default Popup;
