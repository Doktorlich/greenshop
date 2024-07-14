import React from "react";
import PropTypes from "prop-types";
import styled from "./Modal.module.scss";
const Modal = ({ children, activeModal, setActiveModal, cNWindow, cNContent }) => {
    return (
        <div className={[styled["modal"], activeModal ? styled["modal--active"] : "", cNWindow].join(" ")} onClick={() => setActiveModal(false)}>
            <div className={[styled["modal__content"], cNContent].join(" ")} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    activeModal: PropTypes.bool,
    setActiveModal: PropTypes.func,
    cNWindow: PropTypes.string,
    cNContent: PropTypes.string,
};

export default Modal;
