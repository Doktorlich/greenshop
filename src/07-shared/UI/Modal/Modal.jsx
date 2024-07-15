import React from "react";
import PropTypes from "prop-types";
import styled from "./Modal.module.scss";
import iconCross from "../../../07-shared/assets/images/cross.svg";
import { useDispatch } from "react-redux";
const Modal = ({ children, activeModal, setActiveModal, cNWindow, cNContent }) => {
    const dispatch = useDispatch();
    return (
        <div className={[styled["modal"], activeModal ? styled["modal--active"] : "", cNWindow].join(" ")} onClick={() => dispatch(setActiveModal(false))}>
            <div className={[styled["modal__content"], cNContent].join(" ")} onClick={(e) => e.stopPropagation()}>
                <div className={styled["cross"]} onClick={() => dispatch(setActiveModal(false))}>
                    <img src={iconCross} alt="" />
                </div>
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
