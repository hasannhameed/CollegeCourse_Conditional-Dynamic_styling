import React from 'react';
import './Modal.css'; // Import the CSS file
import ReactDom from 'react-dom'

const Modal = (props) => {
    const checkHere = ()=>{
        props.onHandleValidation(true);
    }
  
  return ReactDom.createPortal(
     <div onClick={checkHere} className="modal-overlay">
    <div className="modal-content">
      <h1>Invalid Details</h1>
      <p>Please enter valid information.</p>
    </div>
  </div>,document.getElementById("modal")
  )
}

export default Modal;
