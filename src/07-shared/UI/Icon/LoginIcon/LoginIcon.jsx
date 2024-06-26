import React from "react";
import PropTypes from "prop-types";
const LoginIcon = ({ className }) => {
    return (
        <svg className={className} width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created with Pixso.</desc>
            <defs />
            <rect id="Iconly/Curved/Logout" width="20.000000" height="20.000000" fill="#FFFFFF" fillOpacity="0" />
            <path id="Stroke 1" d="M18.15 10.1L8.12 10.1" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round" />
            <path id="Stroke 3" d="M15.72 7.67L18.16 10.1L15.72 12.53" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round" />
            <path
                id="Stroke 4"
                d="M13.63 6.35C13.35 3.37 12.24 2.29 7.79 2.29C1.88 2.29 1.88 4.21 1.88 9.99C1.88 15.78 1.88 17.7 7.79 17.7C12.24 17.7 13.35 16.62 13.63 13.64"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};
LoginIcon.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node,
};
export default LoginIcon;
