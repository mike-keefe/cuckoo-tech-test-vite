import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  display: flex;

  > div {
    background: white;
    border-radius: 10px;
    padding: 20px;
  }
`;

const Modal = ({ children }: { children: React.ReactNode }) => (
  <Overlay>
    <div>{children}</div>
  </Overlay>
);

export default Modal;
