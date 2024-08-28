import styled from "styled-components";
import '../sass/modal.scss'

const CloseButton = styled.button 
`position: absolute;
top: 15rem;
right: 42rem;
background: black;
color: white;
border: none;
border-radius: 1rem;
padding: 0.4rem 0.6rem;
cursor: pointer;
font-size: 0.9rem;
transition: background-color 0.3s ease;

&:hover {
    background-color: red;
    } `;
    
    interface ModalProps {
        isOpen: boolean;
        onClose: () => void;
        children: JSX.Element;
    }

    const Modal = ({isOpen, onClose, children}: ModalProps) => {

    if(!isOpen) return null
    
  return (
    <div>
        <div className="overlay">
        <CloseButton onClick={onClose}>
            Close
        </CloseButton>
        {children}
        </div> 
    </div>
  )
}

export default Modal
