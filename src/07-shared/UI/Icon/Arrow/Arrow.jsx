import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className, rotate }) => {
    return (
        <svg className={className} rotate={rotate} width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs />
            <rect id="Iconly/Two-tone/Arrow - Down 2" width="16.000000" height="16.000000" fill="#FFFFFF" fillOpacity="0" />
            <path id="Stroke 1" d="M12.66 5.66L7.99 10.33L3.33 5.66" stroke="#3D3D3D" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
    );
};

Arrow.propTypes = {
    className: PropTypes.string,
    rotate: PropTypes.string,
};

export default Arrow;
