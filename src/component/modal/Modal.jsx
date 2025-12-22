import React from "react";
import coffee from "../../assets/modal/coffee.jfif"

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[80vw] h-[80vh] bg-zinc-900 rounded-2xl p-6 relative flex flex-col justify-start items-center"
      >
        <div className="w-full h-1/3 flex justify-center items-center md:w-[60%] md:h-2/3">
          <img className="w-full h-full" src={coffee} alt="drink" />
        </div>
        <div className="w-full h-1/4 mt-12 text-center font-bold text-2xl text-white">
          Drinks name
        </div>
        <div className="w-full h/1/3 text-center text-xl text-white">
          this paragraph is a short explain about the drink
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-700  text-4xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;