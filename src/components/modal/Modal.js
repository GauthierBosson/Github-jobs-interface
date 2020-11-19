import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackground = styled.div`
  padding: 1.5rem;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  min-height: 25%;
  padding: 1rem 2.5rem 2.5rem 2.5rem;
  background-color: var(--bg);
  border-radius: .6rem;
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
          <ModalCard onClick={e => e.stopPropagation()}>{children}</ModalCard>
        </ModalBackground>,
        el
      )
    : null;
}

export default Modal;
