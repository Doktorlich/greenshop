import React from "react";
import PropTypes from "prop-types";
import styled from "./HeartIcon.module.scss";

const HeartIcon = ({ className }) => {

    return (
        <svg className={[styled["check"], className].join(" ")} width="20.000031" height="20.000000" viewBox="0 0 20 20"
             fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="clip4_209">
                    <rect id="heart 1" width="20.000038" height="20.000000" fill="white" fillOpacity="0" />
                </clipPath>
            </defs>
            <rect id="heart 1" width="20.000038" height="20.000000" fill="#FFFFFF" fillOpacity="0" />
            <g clipPath="url(#clip4_209)">
                <path
                    id="Vector"
                    d="M10 18.88C9.71 18.88 9.44 18.78 9.22 18.59C8.41 17.89 7.63 17.22 6.95 16.64L6.94 16.63C4.93 14.92 3.19 13.43 1.98 11.97C0.63 10.34 0 8.79 0 7.1C0 5.46 0.56 3.94 1.58 2.83C2.62 1.71 4.04 1.09 5.58 1.09C6.74 1.09 7.79 1.45 8.72 2.17C9.19 2.54 9.62 2.98 10 3.5C10.37 2.98 10.8 2.54 11.27 2.17C12.2 1.45 13.25 1.09 14.41 1.09C15.95 1.09 17.37 1.71 18.41 2.83C19.43 3.94 20 5.46 20 7.1C20 8.79 19.36 10.34 18.01 11.97C16.8 13.43 15.06 14.92 13.05 16.63C12.36 17.22 11.58 17.88 10.77 18.59C10.55 18.78 10.28 18.88 10 18.88ZM5.58 2.26C4.37 2.26 3.25 2.74 2.44 3.62C1.62 4.52 1.17 5.75 1.17 7.1C1.17 8.52 1.7 9.79 2.88 11.22C4.03 12.61 5.73 14.06 7.7 15.74L7.71 15.74C8.4 16.33 9.18 17 9.99 17.71C10.81 17 11.6 16.33 12.29 15.74C14.26 14.06 15.96 12.61 17.11 11.22C18.29 9.79 18.82 8.52 18.82 7.1C18.82 5.75 18.37 4.52 17.55 3.62C16.74 2.74 15.62 2.26 14.41 2.26C13.52 2.26 12.7 2.54 11.98 3.1C11.34 3.6 10.89 4.23 10.63 4.66C10.5 4.89 10.26 5.03 10 5.03C9.73 5.03 9.49 4.89 9.36 4.66C9.1 4.23 8.65 3.6 8.01 3.1C7.29 2.54 6.47 2.26 5.58 2.26Z"
                    fill="#3D3D3D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                
                />
            </g>
        </svg>
    );
};

HeartIcon.propTypes = {
    className: PropTypes.string,
};

export default HeartIcon;
