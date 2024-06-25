import React from "react";
import styled from "./Button.module.scss";
const Button = ({ children, width, height, classNameProp }) => {
    const styles = { width: `${width}px`, height: `${height}px` };
    console.log(styled.button);
    console.log(classNameProp);
    return (
        <button className={`${styled.button}`+" "+`${classNameProp}`} >
            {children}
        </button>
    );
};

export default Button;
