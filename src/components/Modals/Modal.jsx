import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({date}) => {
  const { 
    text, 
    textButton, 
    handleClick, 
    onClose,
    isOpen,
    showCloseButton = true,
    closeOnClickOutside = true,
    animation = true
  } = date


  const [isVisible, setIsVisible] = useState(false);

  // Manejar animaciones de entrada/salida
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevenir scroll en el body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 300);
      // Restaurar scroll cuando se cierra
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      // Limpiar cuando el componente se desmonta
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Función para cerrar el modal
  const closeModal = () => {
    if (onClose) onClose();
  };

  // Manejar click fuera del modal
  const handleOutsideClick = (e) => {
    if (closeOnClickOutside && e.target.tagName === 'DIALOG') {
      closeModal();
    }
  };
  if(!date) return null 

  return isVisible ? (
    <dialog 
      open
      className={`z-50 w-full h-full fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center rounded-md backdrop-blur-sm shadow-2xl m-0 p-0 ${
        animation ? (isOpen ? "bg-[#0e0e0e3c] opacity-100 transition-all duration-300" : "bg-transparent opacity-0 transition-all duration-300") 
        : "bg-[#0e0e0e3c]"
      }`}
      onClick={handleOutsideClick}
    >
      <div 
        className={`bg-slate-950 relative px-12 py-8 shadow-2xl flex flex-col gap-8 justify-between items-center rounded-xl ${
          animation ? (isOpen ? "scale-100 transition-transform duration-300" : "scale-95 transition-transform duration-300") 
          : ""
        }`}
      >
        {showCloseButton && (
          <div className="absolute top-2 right-2" onClick={closeModal}>
            <IoCloseCircle className="text-3xl text-white hover:text-indigo-600 cursor-pointer transition-colors duration-300" />
          </div>
        )}
        <p className="font-semibold text-wrap text-zinc-200 text-center mt-4 max-w-72">{text}</p>
        <button 
          className="text-base bg-indigo-600 hover:bg-indigo-800 rounded-md px-4 py-2 text-zinc-200 font-semibold transition-colors duration-200" 
          onClick={handleClick}
        >
          {textButton}
        </button>
      </div>
    </dialog>
  ) : null;
};

export default Modal;