"use client";
import React, { useState } from "react";
import Popup from "./Popup";
import "../app/globals.css";
import PopupButton3 from "./PopUp/PopupButton3";
import PopupButton1 from "./PopUp/PopupButton1";
import PopupButton2 from "./PopUp/PopupButton2";
import Link from "next/link";

const PopupButton = ({ id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="  ">
      <button
        className="inline-flex
      px-8  py-6 justify-center
      sm:px-6
      items-center
      gap-1
      border-1 rounded-full
    listButton3
     text-center
      font-feature-settings font-rubik
      text-lg
     sm:text-2xl

      font-normal
       leading-6"
        type="button"
        onClick={handleOpenPopup}
      >
        Learn More
      </button>

      <Popup isOpen={isPopupOpen} id={id} onClose={handleClosePopup} >
        {/* First popup button */}
        {id == "1" && <PopupButton1 />}

        {/* second popup button */}
        {id === 2 && <PopupButton2 />}

        {/* third popup button */}
        {id === 3 && (
          <div>
            <PopupButton3 />
          </div>
        )}

        {/* <div className=" PopUpCancel close1" onClick={handleClosePopup}>
          Cancel
        </div>
        <Link href="https://wa.me/+917206246045">
          <div className="PopUpEnroll text-white">Enroll Now</div>
        </Link> */}

    <div className=" inline h-16  p-4  justify-center bg-white md:h-20 text-black  md:text-xl " onClick={handleClosePopup}>
         Cancel
       </div>
       <Link href="https://wa.me/+917206246045">
         <div className="inline-flex p-4 justify-center  md:p-6 md:text-xl  bg-[#FF8112] rounded-full text-white">Enroll Now</div>
       </Link>
      </Popup>
    </div>
  );
};

export default PopupButton;
