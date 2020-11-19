import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
`;

const modalRoot = document.getElementById("modal-root");

function Modal({ isOpen, closeModal, children }) {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => modalRoot.removeChild(el);
  }, [el]);

  return isOpen
    ? createPortal(
        <ModalBackground onClick={() => closeModal()}>
          <ModalCard>{children}</ModalCard>
        </ModalBackground>,
        el
      )
    : null;
}

export default Modal;
