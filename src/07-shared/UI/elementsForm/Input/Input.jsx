import React, { forwardRef } from "react";
import styled from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = forwardRef(function Input({
                                            id,
                                            value,
                                            type,
                                            className,
                                            min,
                                            max,
                                            step,
                                            placeholder,
                                            onChange,
                                            onClick,
                                            onBlur,
                                            onFocus,
                                            required,
                                            name,
                                            checked,

                                        }, ref) {

    // <div className={styled["wrapper-input"]}>
    //     {/*    {requiredField ? <span className={styled["symbol-required-field"]}>*</span> : ""}*/}
    //     {/*</div>*/}
    return (

        <input
            ref={ref}
            id={id}
            value={value}
            type={type}
            className={`${styled.input} ${className}`}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            required={required}
            name={name}
            checked={checked}
        />


    );
});

Input.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,

    requiredField: PropTypes.bool,
    required: PropTypes.bool,
    checked: PropTypes.bool,

    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,

    children: PropTypes.node,
};
export default Input;
