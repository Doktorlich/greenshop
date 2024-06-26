/* eslint-disable react/prop-types */
import React from "react";
import styled from "./Button.module.scss";
const Button = ({ children, classNameProp }) => {
    return <button className={`${styled.button}` + " " + `${classNameProp}`}>{children}</button>;
};

export default Button;
