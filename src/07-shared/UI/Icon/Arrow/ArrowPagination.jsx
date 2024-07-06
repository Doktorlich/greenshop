import React from "react";
import PropTypes from "prop-types";

const ArrowPagination = ({ className, transform }) => {
    return (
        <svg
            className={className}
            transform={transform}
            width="18.000000"
            height="18.000000"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs />
            <rect id="Iconly/Curved/Arrow - Right 2" width="18.000000" height="18.000000" fill="#FFFFFF" fillOpacity="0" />
            <path
                id="Stroke 1"
                d="M6.37 3.75C6.37 3.75 11.62 6.85 11.62 9C11.62 11.14 6.37 14.25 6.37 14.25"
                stroke="#3D3D3D"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};

ArrowPagination.propTypes = {
    className: PropTypes.string,
    transform: PropTypes.string,
};

export default ArrowPagination;
