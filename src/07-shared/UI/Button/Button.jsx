import React from "react";
import styled from "./Button.module.scss";
import PropTypes from "prop-types";


const Button = ({ children, type, classNameProp, onClick }) => {
    return (
        <button className={[styled.button, classNameProp].join(" ")} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    classNameProp: PropTypes.string,
    onClick: PropTypes.func,
}
;
export default Button;
