import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[80vw] h-[80vh] bg-zinc-900 rounded-2xl p-6 relative"
      >
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